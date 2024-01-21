import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { useStoreCategory } from "../store";

export function useSkeleton() {
  const { categories } = useStoreCategory();
  const amount = categories.length > 0 ? categories.length : 5;

  const cell = Array.from({ length: 5 }).map(() => {
    return (
      <TableCell key={window.crypto.randomUUID()} className="w-1/4">
        <Skeleton className="w-10/12 h-4" />
      </TableCell>
    );
  });
  const skeleton = Array.from({ length: amount }).map(() => {
    return (
      <TableRow key={window.crypto.randomUUID()}>
        {cell.map((item) => item)}
      </TableRow>
    );
  });

  return { skeleton };
}
