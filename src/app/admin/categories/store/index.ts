"use client";
import { Category } from "@/types";
import { create } from "zustand";

interface StoreCategory {
  tryAgain: boolean;
  setTryAgain: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  categories: Category[];
  setCategories: (category: Category[]) => void;
}

export const useStoreCategory = create<StoreCategory>((set) => ({
  tryAgain: false,
  setTryAgain: (value) => set({ tryAgain: value }),
  loading: false,
  setLoading: (value) => set({ loading: value }),
  categories: [],
  setCategories: (value) => set({ categories: value }),
}));
