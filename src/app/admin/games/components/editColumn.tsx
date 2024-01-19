import { Game } from "@/types";
import { PenLineIcon, Trash2 } from "lucide-react";
import { useEditColumn } from "../hooks";

export function EditColumn({ game }: Readonly<{ game: Game }>) {
  const { deleteEdit, editCategory } = useEditColumn({ game });

  return (
    <div className="flex gap-4 justify-start">
      <Trash2 onClick={() => deleteEdit()} className="cursor-pointer" />{" "}
      <PenLineIcon onClick={() => editCategory()} className="cursor-pointer" />
    </div>
  );
}
