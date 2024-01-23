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
import { useStoreGame } from "../store";

const formSchema = z
  .object({
    title: z
      .string()
      .min(2, "Digite no mímino 2 caracteres!")
      .max(50, "Digite no máximo 50 caracteres!"),
    description: z
      .string()
      .min(2, "Digite no mímino 2 caracteres!")
      .max(50, "Digite no máximo 50 caracteres!"),
    platform: z.string(),
  })
  .required();

interface CategoriesFormProps {
  onSubmit: (value: z.infer<typeof formSchema>) => void;
}

export function CategoriesForm({ onSubmit }: Readonly<CategoriesFormProps>) {
  const { loading, gamesEdit } = useStoreGame();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: gamesEdit ? gamesEdit.title : "",
      description: gamesEdit ? gamesEdit.description : "",
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Digite o nome do jogo" {...field} />
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
                  placeholder="Digite uma descrição"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Informe a plataforma" {...field} />
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
