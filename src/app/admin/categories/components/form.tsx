import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useStoreCategory } from "../store";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "Digite no mímino 2 caracteres!")
      .max(50, "Digite no máximo 50 caracteres!"),
    description: z
      .string()
      .min(2, "Digite no mímino 2 caracteres!")
      .max(50, "Digite no máximo 50 caracteres!"),
  })
  .required();

export type ValuesSubmit = z.infer<typeof formSchema>;

interface CategoriesFormProps {
  onSubmit: (value: ValuesSubmit) => void;
}

export function CategoriesForm({ onSubmit }: CategoriesFormProps) {
  const { loading, categoriesEdit } = useStoreCategory();

  const form = useForm<ValuesSubmit>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: categoriesEdit ? categoriesEdit.name : "",
      description: categoriesEdit ? categoriesEdit.description : "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Digite o nome da categoria..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  maxLength={50}
                  placeholder="Digite uma descrição..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="w-1/3 ml-auto" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
