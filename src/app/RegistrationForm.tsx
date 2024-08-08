"use client";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { FormValues, ReturnValue } from "@/app/types";

import { schema } from "./registrationSchema";
import { useRef } from "react";

export const RegistrationForm = ({
  onDataAction,
  onFormAction,
}: {
  onFormAction: (
    prevState: ReturnValue,
    data: FormData
  ) => Promise<ReturnValue>;
  onDataAction: (data: FormValues) => Promise<ReturnValue>;
}) => {
  const [state, formAction] = useFormState(onFormAction, { message: "" });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      last: "",
      first: "",
      email: "",
      zipcode: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // const formData = new FormData();
    // formData.append("last", data.last);
    // formData.append("first", data.first);
    // formData.append("email", data.email);
    // fetch("/api/registerForm", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // console.log(await onDataAction(data));
    // const formData = new FormData();
    // formData.append("last", data.last);
    // formData.append("first", data.first);
    // formData.append("email", data.email);
    // console.log(await onFormAction(formData));
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <div>{state?.message}</div>
      <form
        ref={formRef}
        className="space-y-8"
        onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
        action={formAction}
      >
        <div className="flex gap-2 justify-stretch">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Your first name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zipcode</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your zipcode.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
