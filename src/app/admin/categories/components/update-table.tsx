import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
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
    <>
      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger>
            <Button disabled={disabled} onClick={updateTable}>
              Atualizar
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="bg-primary-foreground p-3 rounded-full text-xs">
              Espere 5 segundos para tentar novamente.
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
