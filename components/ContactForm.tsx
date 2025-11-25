"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Building2, Mail, MessageSquare, Send } from "lucide-react";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="name" className="font-body text-sm font-semibold text-[#0F0F0F] flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            </div>
            Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className="bg-[#FFFEF9] border-2 border-[#0F0F0F]/8 text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:border-[#D4AF37]/50 focus:ring-4 focus:ring-[#D4AF37]/10 rounded-xl px-4 py-3 text-base transition-all hover:border-[#0F0F0F]/15"
          />
          {errors.name && (
            <span className="font-body text-xs text-[#B22222] font-medium">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-3">
          <label htmlFor="company" className="font-body text-sm font-semibold text-[#0F0F0F] flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            </div>
            Company
          </label>
          <Input
            id="company"
            placeholder="Acme Inc."
            {...register("company", { required: "Company is required" })}
            className="bg-white border-2 border-[#0F0F0F]/8 text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:border-[#D4AF37]/50 focus:ring-4 focus:ring-[#D4AF37]/10 rounded-xl px-4 py-3 text-base transition-all hover:border-[#0F0F0F]/15"
          />
          {errors.company && (
            <span className="font-body text-xs text-[#B22222] font-medium">{errors.company.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="email" className="font-body text-sm font-semibold text-[#0F0F0F] flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
          </div>
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
          className="bg-white border-2 border-[#0F0F0F]/8 text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:border-[#D4AF37]/50 focus:ring-4 focus:ring-[#D4AF37]/10 rounded-xl px-4 py-3 text-base transition-all hover:border-[#0F0F0F]/15"
        />
        {errors.email && (
          <span className="font-body text-xs text-[#B22222] font-medium">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="font-body text-sm font-semibold text-[#0F0F0F] flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
          </div>
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          {...register("message", { required: "Message is required" })}
          className="bg-[#FFFEF9] border-2 border-[#0F0F0F]/8 text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:border-[#D4AF37]/50 focus:ring-4 focus:ring-[#D4AF37]/10 min-h-[140px] rounded-xl px-4 py-3 text-base transition-all hover:border-[#0F0F0F]/15 resize-none"
        />
        {errors.message && (
          <span className="font-body text-xs text-[#B22222] font-medium">{errors.message.message}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="brand"
        className="group font-body w-full mt-6 rounded-2xl bg-gradient-to-r from-[#B22222] to-[#C1121F] px-8 py-4 text-base text-white font-semibold hover:from-[#8B1A1A] hover:to-[#A01616] shadow-[0_12px_40px_rgba(178,34,34,0.4)] hover:shadow-[0_16px_50px_rgba(178,34,34,0.5)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
