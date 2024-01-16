"use client";
import { Category } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EditColumn } from "./edit-column";

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
    cell: ({ row }) => <EditColumn categories={row.original} />,
  },
];
