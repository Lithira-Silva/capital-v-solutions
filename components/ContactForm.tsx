"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent! (This is a demo)");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-text-light">
            Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-gold"
          />
          {errors.name && (
            <span className="text-xs text-brand-red">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-brand-text-light">
            Company
          </label>
          <Input
            id="company"
            placeholder="Acme Inc."
            {...register("company", { required: "Company is required" })}
            className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-gold"
          />
          {errors.company && (
            <span className="text-xs text-brand-red">{errors.company.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-text-light">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-gold"
        />
        {errors.email && (
          <span className="text-xs text-brand-red">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-text-light">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          {...register("message", { required: "Message is required" })}
          className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-gold min-h-[120px]"
        />
        {errors.message && (
          <span className="text-xs text-brand-red">{errors.message.message}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="brand"
        className="w-full mt-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
