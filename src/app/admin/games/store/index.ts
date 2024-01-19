import { Game } from "@/types";
import { create } from "zustand";

interface StoreGame {
  games: Game[];
  setGames: (value: Game[]) => void;
  tryAgain: boolean;
  setTryAgain: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  gamesEdit: Game | null;
  setGamesEdit: (Game: Game | null) => void;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const useStoreGame = create<StoreGame>((set) => ({
  games: [] as Game[],
  setGames: (value) => set({ games: value }),
  tryAgain: false,
  setTryAgain: (value) => set({ tryAgain: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  gamesEdit: null,
  setGamesEdit: (value) => set({ gamesEdit: value }),
  modalOpen: false,
  setModalOpen: (value) => set({ modalOpen: value }),
}));
