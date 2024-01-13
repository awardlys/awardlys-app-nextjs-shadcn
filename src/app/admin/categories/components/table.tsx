"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStoreCategory } from "../store";

export function TableCategory() {
  const { categories } = useStoreCategory();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Data de Criação</TableHead>
          <TableHead className="text-right">Atualização</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((i) => (
          <TableRow key={i.id}>
            <TableCell className="font-medium">{i.name}</TableCell>
            <TableCell>{i.description}</TableCell>
            <TableCell>{i.createdAt}</TableCell>
            <TableCell className="text-right">{i.updatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
