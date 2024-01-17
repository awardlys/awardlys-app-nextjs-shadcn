import { deleteCategory } from "@/services/http/categories";
import { Category } from "@/types";
import { useStoreCategory } from "../store";

export function useEditColumn({ category }: Readonly<{ category: Category }>) {
  const { setTryAgain, setModalOpen, setCategoriesEdit } = useStoreCategory();

  function editCategory() {
    setCategoriesEdit(category);
    setModalOpen(true);
  }
  function deleteEdit() {
    deleteCategory(category.id);
    setTryAgain(false);
  }

  return { editCategory, deleteEdit };
}
