"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import FormButton from "./FormButton";
import { Textarea } from "../../ui/textarea";
import { sendEmail } from "@/actions/email";

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: ContactFormValues) => {
    await sendEmail(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-4"
      >
        <div className="flex max-md:flex-col max-md:space-y-2 md:space-x-2">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  {...field}
                  rows={10}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormButton pending={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </FormButton>
      </form>
    </Form>
  );
};

export default ContactForm;
