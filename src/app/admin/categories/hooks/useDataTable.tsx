import {
  getCategories,
  postCategory,
  updateCategory,
} from "@/services/http/categories";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { columns } from "../components/coluns";
import { ValuesSubmit } from "../components/form";
import { useStoreCategory } from "../store";

export function useDataTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const {
    setModalOpen,
    categories,
    modalOpen,
    setTryAgain,
    categoriesEdit,
    setCategoriesEdit,
    setCategories,
    loading,
    setLoading,
    tryAgain,
  } = useStoreCategory();
  useEffect(() => {
    if (tryAgain) {
      return;
    }
    setLoading(true);
    getCategories()
      .then((res) => {
        const data = res.map((item) => ({
          ...item,
          createdAt: dayjs(item.createdAt).format("DD/MM/YYYY"),
          updatedAt: dayjs(item.updatedAt).format("DD/MM/YYYY"),
        }));
        setCategories(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
        setTryAgain(true);
      });
  }, [setCategories, setLoading, setTryAgain, tryAgain]);
  const table = useReactTable({
    data: categories,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
    },
  });
  async function onSubmit(values: ValuesSubmit) {
    if (categoriesEdit?.id) {
      updateCategory(categoriesEdit.id, values, categoriesEdit.name)
        .then()
        .catch()
        .finally(() => setTryAgain(false));
      setModalOpen(false);
      setCategoriesEdit(null);
    } else {
      const res = await postCategory(values);
      if (!res) return;
      setTryAgain(false);
      setModalOpen(false);
    }
  }
  return { table, loading, modalOpen, setModalOpen, onSubmit };
}
