"use client";
import { Category } from "@/types";
import { create } from "zustand";

interface StoreCategory {
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
  tryAgain: false,
  setTryAgain: (value) => set({ tryAgain: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  categoriesEdit: null,
  setCategoriesEdit: (value) => set({ categoriesEdit: value }),
  modalOpen: false,
  setModalOpen: (value) => set({ modalOpen: value }),
}));
