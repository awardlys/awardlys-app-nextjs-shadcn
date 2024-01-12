import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Category } from "@/types";
import dayjs from "dayjs";
import { Search } from "lucide-react";

interface TableCategoriesProps {
  data?: Category[];
}

export function TableCategories({ data }: Readonly<TableCategoriesProps>) {
  return (
    <div className="my-8 flex flex-col gap-6">
      <div className="flex gap-2">
        <div className="flex gap-2">
          <Input type="search" placeholder="Pesquise uma categoria" />
          <Button>
            <Search />
          </Button>
        </div>
        <Button>Tentar novamente</Button>
      </div>
      <Table>
        <TableHeader>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Criação</TableHead>
          <TableHead className="text-right">Última Atualização</TableHead>
        </TableHeader>
        <TableBody>
          {data?.map((i) => (
            <TableRow key={i.id}>
              <TableCell className="font-medium h-4 w-[150px]">
                {i.name}
              </TableCell>
              <TableCell className="h-4 w-[150px]">{i.description}</TableCell>
              <TableCell className="h-4 w-[150px]">
                {dayjs(i.createdAt).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell className="text-right h-4 w-[150px]">
                {dayjs(i.updatedAt).format("DD/MM/YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
