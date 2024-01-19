import { deleteCategory } from "@/services/http/categories";
import { Game } from "@/types";
import { useStoreGame } from "../store";

export function useEditColumn({ game }: Readonly<{ game: Game }>) {
  const { setTryAgain, setModalOpen, setGamesEdit } = useStoreGame();

  function editCategory() {
    setGamesEdit(game);
    setModalOpen(true);
  }
  function deleteEdit() {
    deleteCategory(game.id);
    setTryAgain(false);
  }

  return { editCategory, deleteEdit };
}
