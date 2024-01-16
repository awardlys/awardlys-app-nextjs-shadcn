import { deleteCategory } from "@/services/http/categories";
import { Category } from "@/types";
import { PenLineIcon, Trash2 } from "lucide-react";
import { useStoreCategory } from "../store";

export function EditColumn({ categories }: { categories: Category }) {
  const { setTryAgain, setModalOpen, setCategoriesEdit } = useStoreCategory();

  function editCategory() {
    setCategoriesEdit(categories);
    setModalOpen(true);
  }

  function deleteEdit() {
    deleteCategory(categories.id);
    setTryAgain(false);
  }
  return (
    <div className="flex gap-4 justify-start">
      <Trash2 onClick={() => deleteEdit()} className="cursor-pointer" />{" "}
      <PenLineIcon onClick={() => editCategory()} className="cursor-pointer" />
    </div>
  );
}
