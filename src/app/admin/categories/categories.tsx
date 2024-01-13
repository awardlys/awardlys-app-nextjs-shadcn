"use client";
import { SearchCategory } from "./components/search";
import { TableCategory } from "./components/table";

export function CategoriesPage() {
  return (
    <div>
      <SearchCategory />
      <TableCategory />
    </div>
  );
}
