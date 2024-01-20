"use client";
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
import { login } from "@/services/http/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodSchema } from "./schema";

const { schema } = zodSchema();
type typeSchema = z.infer<typeof schema>;

export function LoginForm() {
  const { replace } = useRouter();
  const authorized = JSON.parse(localStorage.getItem("token") ?? "null");
  if (authorized) {
    replace("/admin/awards");
  }

  const form = useForm<typeSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      passwordHash: "",
    },
  });

  async function onSubmit(values: typeSchema) {
    const data = await login(values);
    if (data?.status === 201) {
      localStorage.setItem("token", JSON.stringify(data?.data.access_token));
      replace("/admin/awards");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...field}
                />
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
                <Input
                  type="password"
                  placeholder="Digite seu password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Logar
        </Button>
      </form>
    </Form>
  );
}
