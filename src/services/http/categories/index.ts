import { toast } from "sonner";
import { Category } from "../../../types";
import { api } from "../api";

const id =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBlbWFpbC5jb20iLCJpYXQiOjE3MDQ5ODk1MTYsImV4cCI6MTcwNTU5NDMxNn0.mwuekh8oEngHq4ttOykabHzrLbQmSFxo7IMn_Brd7CI";
export const getCategories = async (): Promise<Category[]> => {
  try {
    const output = await api.get("/categories", {
      headers: {
        Authorization: "Bearer " + id,
      },
    });

    return output.data?.categories;
  } catch (error) {
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
      // message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    // message.success("Categoria adicionada com sucesso");

    return true;
  } catch (error) {
    // message.error("Não foi possível criar a categoria");
    return false;
  }
};

export const updateCategory = async (
  id: string,
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/categories/${id}`, data);

    if (!String(output.status).startsWith("2")) {
      // message.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    // message.success("Categoria editada com sucesso");

    return true;
  } catch (error) {
    // message.error("Não foi possível criar a categoria");
    return false;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await api.delete(`/categories/${id}`);
    // message.info("Categoria excluída com sucesso");
  } catch (error) {
    // message.error("Não foi possível excluir a categoria");
  }
};
