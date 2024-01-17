import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export function useSkeleton() {
  const skeleton = [];
  const cell = [];

  for (let i = 0; i < 5; i++) {
    cell.push({
      data: (
        <TableCell className="w-1/4">
          <Skeleton className="w-10/12 h-4" />
        </TableCell>
      ),
    });
  }
  for (let i = 0; i < 3; i++) {
    skeleton.push({
      data: <TableRow>{cell.map((i) => i.data)}</TableRow>,
    });
  }
  return { skeleton };
}
