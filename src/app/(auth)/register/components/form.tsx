"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/services/http/register";
import { useRouter } from "next/navigation";
const passwordMinLength = 8;
const formSchema = z.object({
  username: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z
    .string()
    .min(2, {
      message: "E-mail inválido!",
    })
    .email("Digite um e-mail válido!"),

  passwordHash: z
    .string()
    .min(passwordMinLength, {
      message: `A senha deve ter pelo menos ${passwordMinLength} caracteres.`,
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra minúscula.",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .refine((value) => /\d/.test(value), {
      message: "A senha deve conter pelo menos um número.",
    })
    .refine((value) => /[@$!%*?&]/.test(value), {
      message: "A senha deve conter pelo menos um caractere especial.",
    }),
});

export function RegisterForm() {
  const { replace } = useRouter();
  const authorized = JSON.parse(localStorage.getItem("token") ?? "null");
  if (authorized) {
    replace("/admin/awards");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      passwordHash: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await register(values);
    if (data?.status === 201) {
      replace("/signIn");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordHash"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Criar conta
        </Button>
      </form>
    </Form>
  );
}
