import { getCategories } from "@/services/http/categories";
import { TableCategories } from "./components/table";

export default async function Categories() {
  const data = await getCategories();
  return <TableCategories data={data} />;
}
