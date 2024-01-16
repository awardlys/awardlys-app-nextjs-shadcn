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
      updateCategory(categoriesEdit.id, values);
      setTryAgain(false);
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
    <div className="rounded-md border">
      <div className=" flex justify-between p-4 items-center">
        <div className="flex items-center w-1/2 gap-8">
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
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog onOpenChange={setModalOpen} open={modalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar categoria</DialogTitle>
          </DialogHeader>
          <CategoriesForm onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
