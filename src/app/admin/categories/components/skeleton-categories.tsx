import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./coluns";

export function SkeletonCategories() {
  const table = useReactTable({
    data: [],
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="last:w-[50px] last:text-center"
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
        <TableRow>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-[70px] h-4" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-[70px] h-4" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell className="w-1/4">
            <Skeleton className="w-full h-4" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-[70px] h-4" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
