"use client";
import { Category } from "@/types";
import { create } from "zustand";

interface StoreCategory {
  categoryEdit: Category | {};
  setCategoryEdit: (value: Category) => void;
  search: string;
  setSearch: (value: string) => void;
  tryAgain: boolean;
  setTryAgain: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  categories: Category[];
  setCategories: (category: Category[]) => void;
}

export const useStoreCategory = create<StoreCategory>((set) => ({
  categoryEdit: {},
  setCategoryEdit: (value) => set({ categoryEdit: value }),
  search: "",
  setSearch: (value) => set({ search: value }),
  tryAgain: false,
  setTryAgain: (value) => set({ tryAgain: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  categories: [],
  setCategories: (value) => set({ categories: value }),
}));
