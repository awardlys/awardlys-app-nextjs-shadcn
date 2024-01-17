"use client";
import { getCategories } from "@/services/http/categories";
import { Category } from "@/types";
import daysjs from "dayjs";
import { useEffect, useState } from "react";
import { columns } from "./components/coluns";
import { DataTable } from "./components/data-table";
import { useStoreCategory } from "./store";

export function CategoriesPage({ data }: { data: Category[] }) {
  const [categories, setCategories] = useState(data);
  const { setLoading, setTryAgain, tryAgain } = useStoreCategory();

  useEffect(() => {
    if (tryAgain) {
      return;
    }
    setLoading(true);
    getCategories()
      .then((res) => {
        const data = res.map((item) => ({
          ...item,
          createdAt: daysjs(item.createdAt).format("DD/MM/YYYY"),
          updatedAt: daysjs(item.updatedAt).format("DD/MM/YYYY"),
        }));
        setCategories(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
        setTryAgain(true);
      });
  }, [setLoading, setTryAgain, tryAgain]);

  return <DataTable columns={columns} data={categories} />;
}
