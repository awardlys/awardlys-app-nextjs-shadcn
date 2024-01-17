import { getCategories } from "@/services/http/categories";
import dayjs from "dayjs";
import { CategoriesPage } from "./categories";

export default async function Categories() {
  const data = await getCategories().then((res) => {
    const data = res.map((item) => ({
      ...item,
      createdAt: dayjs(item.createdAt).format("DD/MM/YYYY"),
      updatedAt: dayjs(item.updatedAt).format("DD/MM/YYYY"),
    }));
    return data;
  });
  return <CategoriesPage data={data} />;
}
