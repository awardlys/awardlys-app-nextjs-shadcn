import { Category } from "@/types";
import { create } from "zustand";

interface StoreCategory {
  infoUpdate: string;
  setInfoUpdate: (value: string) => void;
  categories: Category[];
  setCategories: (value: Category[]) => void;
  tryAgain: boolean;
  setTryAgain: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  categoriesEdit: Category | null;
  setCategoriesEdit: (category: Category | null) => void;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const useStoreCategory = create<StoreCategory>((set) => ({
  infoUpdate: "",
  setInfoUpdate: (value) => set({ infoUpdate: value }),
  categories: [] as Category[],
  setCategories: (value) => set({ categories: value }),
  tryAgain: false,
  setTryAgain: (value) => set({ tryAgain: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  categoriesEdit: null,
  setCategoriesEdit: (value) => set({ categoriesEdit: value }),
  modalOpen: false,
  setModalOpen: (value) => set({ modalOpen: value }),
}));
