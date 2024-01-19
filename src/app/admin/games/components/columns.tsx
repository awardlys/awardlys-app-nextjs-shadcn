"use client";
import { Game } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EditColumn } from "./editColumn";

export const columns: ColumnDef<Game>[] = [
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
    cell: ({ row }) => <EditColumn game={row.original} />,
  },
];
