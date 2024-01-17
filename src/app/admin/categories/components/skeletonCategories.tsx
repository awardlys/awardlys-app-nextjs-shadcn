import * as T from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSkeleton } from "../hooks";
import { columns } from "./coluns";

export function SkeletonCategories() {
  const { skeleton } = useSkeleton();
  const table = useReactTable({
    data: [],
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <T.Table>
      <T.TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <T.TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <T.TableHead
                  key={header.id}
                  className="last:w-[50px] last:text-center"
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
      <T.TableBody>{skeleton.map((i) => i.data)}</T.TableBody>
    </T.Table>
  );
}
