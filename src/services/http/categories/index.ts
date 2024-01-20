import { Category } from "@/types";
import { toast } from "sonner";
import { api } from "../api";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const output = await api.get("/categories");

    return output.data?.categories;
  } catch (error) {
    console.error(error);
    toast.error("Não foi possível buscar as categorias");
    return [];
  }
};

export const postCategory = async (
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/categories", data);

    if (!String(output.status).startsWith("2")) {
      toast.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    toast.success(`${data.name} adicionada com sucesso`);

    return true;
  } catch (error) {
    console.error(error);
    toast.error(`Não foi possível criar a categoria ${data.name}`);
    return false;
  }
};

export const updateCategory = async (
  id: string,
  data: Omit<Category, "id" | "createdAt" | "updatedAt">,
  name: string
) => {
  try {
    const output = await api.patch(`/categories/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      toast.warning(
        `Verifique se os dados da categoria ${name} estão corretos e tente novamente`
      );
      return false;
    }

    toast.success(`${name} editada para ${data.name} 
    com sucesso`);

    return true;
  } catch (error) {
    toast.error(`Não foi possível criar a ${name}`);
    return false;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await api.delete(`/categories/${id}`);
    toast.info("Categoria excluída com sucesso");
  } catch (error) {
    toast.error("Não foi possível excluir a categoria");
  }
};
