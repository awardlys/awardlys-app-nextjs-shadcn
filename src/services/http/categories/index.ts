import { Category } from "@/types";
import { toast } from "sonner";
import { api } from "../api";

const acessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBlbWFpbC5jb20iLCJpYXQiOjE3MDUxNDUwNTgsImV4cCI6MTcwNTc0OTg1OH0.qhN8AykEZ0PTQZY_7yrsaALfn_lnpvPISfUGS17kh-4";

const headers = {
  headers: { Authorization: `Bearer ${acessToken}` },
};
export const getCategories = async (): Promise<Category[]> => {
  try {
    const output = await api.get("/categories", headers);

    return output.data?.categories;
  } catch (error) {
    console.log("Deu ruim:", error);
    toast.error("Não foi possível buscar as categorias");
    return [];
  }
};

export const postCategory = async (
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.post("/categories", data, headers);

    if (!String(output.status).startsWith("2")) {
      toast.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    toast.success(`${data.name} adicionada com sucesso`);

    return true;
  } catch (error) {
    toast.error(`Não foi possível criar a ${data.name}`);
    return false;
  }
};

export const updateCategory = async (
  id: string,
  data: Omit<Category, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const output = await api.patch(`/categories/${id}`, data, headers);

    if (!String(output.status).startsWith("2")) {
      toast.warning("Verifique se os dados estão corretos e tente novamente");
      return false;
    }

    toast.success(`${data.name} editada com sucesso`);

    return true;
  } catch (error) {
    toast.error(`Não foi possível criar a ${data.name}`);
    return false;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await api.delete(`/categories/${id}`, headers);
    toast.info("Categoria excluída com sucesso");
  } catch (error) {
    toast.error("Não foi possível excluir a categoria");
  }
};
