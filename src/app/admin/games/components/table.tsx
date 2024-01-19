import * as T from "@/components/ui/table";
import { Game } from "@/types";
import { Table, flexRender } from "@tanstack/react-table";
import { columns } from "./columns";

export function TableCategory({ table }: Readonly<{ table: Table<Game> }>) {
  return (
    <T.Table className="border- rounded-t-xl">
      <T.TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <T.TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <T.TableHead
                  key={header.id}
                  className="w-1/4 last:w-[50px] last:text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </T.TableHead>
              );
            })}
          </T.TableRow>
        ))}
      </T.TableHeader>
      <T.TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <T.TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <T.TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </T.TableCell>
              ))}
            </T.TableRow>
          ))
        ) : (
          <T.TableRow>
            <T.TableCell colSpan={columns.length} className="h-24 text-center">
              Nenhum jogo encontrado
            </T.TableCell>
          </T.TableRow>
        )}
      </T.TableBody>
    </T.Table>
  );
}
