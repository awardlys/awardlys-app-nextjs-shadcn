import { api } from "../api";
import { toast } from "sonner";
import { Game } from "../../../types";

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const output = await api.get("/games");

    return output.data?.games;
  } catch (error) {
    toast.error("Não foi possível buscar os jogos");
    return [];
  }
};

export const createGame = async (
  data: Omit<Game, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/games", data);

    if (!String(output.status).startsWith("2")) {
      toast.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    toast.success("Game adicionado com sucesso");

    return true;
  } catch (error) {
    toast.error("Não foi possível criar o jogo");
    return false;
  }
};

export const updateGame = async (
  id: string,
  data: Omit<Game, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/games/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      toast.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    toast.success("Game editado com sucesso");

    return true;
  } catch (error) {
    toast.error("Não foi possível criar o jogo");
    return false;
  }
};

export const deleteGame = async (id: string): Promise<void> => {
  try {
    await api.delete(`/games/${id}`);
    toast.info("Jogo excluído com sucesso");
  } catch (error) {
    toast.error("Não foi possível excluir o jogo");
  }
};
