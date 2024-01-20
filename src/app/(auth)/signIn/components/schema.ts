import * as z from "zod";

export function zodSchema() {
  const passwordMinLength = 8;
  const schema = z.object({
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

  return { schema };
}
