import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useStoreCategory } from "../store";

export function UpdateTable() {
  const { setTryAgain } = useStoreCategory();
  const [disabled, setDisabled] = useState(false);

  function updateTable() {
    setDisabled(true);
    setTryAgain(false);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }
  return (
    <Button disabled={disabled} onClick={updateTable}>
      Atualizar
    </Button>
  );
}
