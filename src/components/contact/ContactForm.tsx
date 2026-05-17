"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { createFormSchema } from "@/schema/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import * as z from "zod";
import { sendContactEmail } from "./actions";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

interface ContactFieldProps {
  name: Path<FormValues>;
  control: Control<FormValues>;
  label: string;
  children: (
    field: ControllerRenderProps<FormValues, Path<FormValues>>,
    fieldState: ControllerFieldState,
  ) => React.ReactNode;
}

function ContactField({ name, control, label, children }: ContactFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          {children(field, fieldState)}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export function ContactForm() {
  const { t } = useTranslation();
  const formSchema = createFormSchema(t);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const sendPromise = sendContactEmail(data);

    toast.promise(sendPromise, {
      loading: t("contact.toast.loading"),
      success: t("contact.toast.success"),
      error: t("contact.toast.error"),
      position: "top-left",
    });

    const result = await sendPromise;
    if (result.success) form.reset();
  }

  return (
    <Card className="w-full flex flex-col z-1">
      <CardContent>
        <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <ContactField
              name="name"
              control={form.control}
              label={t("contact.form.name")}
            >
              {(field, fieldState) => (
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
              )}
            </ContactField>

            <ContactField
              name="email"
              control={form.control}
              label={t("contact.form.email")}
            >
              {(field, fieldState) => (
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  aria-invalid={fieldState.invalid}
                />
              )}
            </ContactField>

            <ContactField
              name="message"
              control={form.control}
              label={t("contact.form.message.label")}
            >
              {(field, fieldState) => (
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id={field.name}
                    placeholder={t("contact.form.message.placeholder")}
                    className="min-h-24 resize-none"
                    maxLength={250}
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value.length ?? 0}/250
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              )}
            </ContactField>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            disabled={isSubmitting}
            className="hover:scale-105 transition-transform active:scale-[0.97]"
          >
            {t("contact.buttons.reset")}
          </Button>

          <Button
            type="submit"
            form="form-contact"
            disabled={!form.formState.isValid || isSubmitting}
            className="hover:scale-105 transition-transform active:scale-[0.97]"
          >
            {t("contact.buttons.submit")}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
