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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="font-body text-sm font-medium text-brand-text-light">
            Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-gold)] rounded-lg"
          />
          {errors.name && (
            <span className="font-body text-xs text-[var(--color-red)]">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="font-body text-sm font-medium text-brand-text-light">
            Company
          </label>
          <Input
            id="company"
            placeholder="Acme Inc."
            {...register("company", { required: "Company is required" })}
            className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-gold)] rounded-lg"
          />
          {errors.company && (
            <span className="font-body text-xs text-[var(--color-red)]">{errors.company.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="font-body text-sm font-medium text-brand-text-light">
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
          className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-gold)] rounded-lg"
        />
        {errors.email && (
          <span className="font-body text-xs text-[var(--color-red)]">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="font-body text-sm font-medium text-brand-text-light">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          {...register("message", { required: "Message is required" })}
          className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-gold)] min-h-[120px] rounded-lg"
        />
        {errors.message && (
          <span className="font-body text-xs text-[var(--color-red)]">{errors.message.message}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="brand"
        className="font-body w-full mt-4 rounded-full bg-[var(--color-red)] px-8 py-3 text-white hover:bg-[var(--color-red-dark)] shadow-lg shadow-[rgba(178,34,34,0.4)] hover:-translate-y-0.5 transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
