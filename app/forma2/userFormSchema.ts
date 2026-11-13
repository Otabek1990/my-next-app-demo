import z from "zod";

export const userFormSchema = z.object({
  ism: z
    .string()
    .min(1, { message: "ism majburiy" })
    .min(3, { message: "kamida 3ta bolsin" })
    .regex(/^[A-Z\u0410-\u042F\u0401\u02BB\u02BC].*$/,{message:"ism katta harf bilan boshlansin"}),
  yosh: z
    .number({message:"yosh majburiy"})
    .min(1, { message: "yosh 1dan kichik bololmaydi" })
    .max(150, { message: "yosh 150dan katta bololmaydi" }),
  parol: z
    .string()
    .min(1, { message: "parol majburiy" })
    .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
    message:
      "Parol tarkibida katta harf va son bolishi majburiy. kamida 6ta belgi bolsin",
  }),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
