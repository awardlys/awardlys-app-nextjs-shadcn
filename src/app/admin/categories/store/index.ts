"use client";
import { Category } from "@/types";
import { create } from "zustand";

interface StoreCategory {
  categories: Category[];
  setCategories: (category: Category[]) => void;
}

export const useStoreCategory = create<StoreCategory>((set) => ({
  categories: [],
  setCategories: (value) => set({ categories: value }),
}));
