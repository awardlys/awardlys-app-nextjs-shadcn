"use client";
import { Category } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { PenLineIcon, Trash2 } from "lucide-react";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
  },
  {
    accessorKey: "updatedAt",
    header: "Atualização",
  },
  {
    header: "Editar",
    cell: ({ row }) => (
      <div className="flex gap-4 justify-start">
        <Trash2 className="cursor-pointer" />{" "}
        <PenLineIcon className="cursor-pointer" />
      </div>
    ),
  },
];
