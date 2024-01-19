import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useStoreGame } from "../store";

export function ButtonUpdateTable() {
  const { setTryAgain, loading } = useStoreGame();
  const [disabled, setDisabled] = useState(false);

  function updateTable() {
    setDisabled(true);
    setTryAgain(false);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
    if (!loading) {
      toast.success("Atualizada com sucesso!");
    }
  }
  return (
    <Button disabled={disabled} onClick={updateTable}>
      Atualizar
    </Button>
  );
}
