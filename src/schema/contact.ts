import z from "zod";

export const createFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().nonempty(t("contact.form.schema.name")),

    email: z
      .string()
      .nonempty(t("contact.form.schema.email.noneEmpty"))
      .email(t("contact.form.schema.email.message")),

    message: z
      .string()
      .nonempty(t("contact.form.schema.message.noneEmpty"))
      .min(20, t("contact.form.schema.message.min"))
      .max(250, t("contact.form.schema.message.max")),
  });