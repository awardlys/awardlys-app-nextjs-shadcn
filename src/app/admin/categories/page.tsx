import { getCategories } from "@/services/http/categories";
import daysjs from "dayjs";
import { columns } from "./components/coluns";
import { DataTable } from "./components/data-table";

export default async function DemoPage() {
  const res = await getCategories();
  const data = res.map((item) => ({
    ...item,
    createdAt: daysjs(item.createdAt).format("DD/MM/YYYY"),
    updatedAt: daysjs(item.updatedAt).format("DD/MM/YYYY"),
  }));
  return (
    <div className="py-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
