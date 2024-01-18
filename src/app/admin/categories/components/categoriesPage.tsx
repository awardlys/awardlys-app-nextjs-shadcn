"use client";
import { Button } from "@/components/ui/button";
import * as D from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useDataTable } from "../hooks";
import { ButtonUpdateTable } from "./buttonUpdate";
import { CategoriesForm } from "./form";
import { SkeletonCategories } from "./skeletonCategories";
import { TableCategory } from "./table";

export function CategoriesPage() {
  const { loading, table, modalOpen, onSubmit, setModalOpen } = useDataTable();

  return (
    <div className="flex flex-col gap-6">
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
          <ButtonUpdateTable />
        </div>
        <Button onClick={() => setModalOpen(true)} className="flex gap-1">
          <Plus /> <span>Adicionar</span>
        </Button>
      </div>

      <div>
        {loading && <SkeletonCategories />}
        {loading === false && <TableCategory table={table} />}
      </div>

      <D.Dialog
        onOpenChange={(value) => {
          setModalOpen(value);
        }}
        open={modalOpen}
      >
        <D.DialogContent className="flex flex-col gap-8">
          <D.DialogHeader>
            <D.DialogTitle>Criar categoria</D.DialogTitle>
          </D.DialogHeader>
          <CategoriesForm onSubmit={onSubmit} />
        </D.DialogContent>
      </D.Dialog>
    </div>
  );
}
