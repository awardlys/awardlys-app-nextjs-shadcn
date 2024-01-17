"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { postCategory, updateCategory } from "@/services/http/categories";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useStoreCategory } from "../store";
import { CategoriesForm, ValuesSubmit } from "./form";
import { SkeletonCategories } from "./skeleton-categories";
import { UpdateTable } from "./update-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const {
    setModalOpen,
    modalOpen,
    setTryAgain,
    categoriesEdit,
    setCategoriesEdit,
    loading,
  } = useStoreCategory();
  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
    },
  });
  async function onSubmit(values: ValuesSubmit) {
    if (categoriesEdit?.id) {
      updateCategory(categoriesEdit.id, values, categoriesEdit.name)
        .then()
        .catch()
        .finally(() => setTryAgain(false));
      setModalOpen(false);
      setCategoriesEdit(null);
    } else {
      const res = await postCategory(values);
      if (!res) return;
      setTryAgain(false);
      setModalOpen(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full gap-8">
          <Input
            placeholder="Pesquise uma categoria..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <UpdateTable />
        </div>
        <div>
          <Button onClick={() => setModalOpen(true)} className="flex gap-1">
            <Plus /> <span>Adicionar</span>
          </Button>
        </div>
      </div>
      {loading && <SkeletonCategories />}
      {loading === false && (
        <Table className="border- rounded-t-xl">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="w-1/4 last:w-[50px] last:text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhuma Categoria...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      <Dialog onOpenChange={setModalOpen} open={modalOpen}>
        <DialogContent className="flex flex-col gap-8">
          <DialogHeader>
            <DialogTitle>Criar categoria</DialogTitle>
          </DialogHeader>
          <CategoriesForm onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
