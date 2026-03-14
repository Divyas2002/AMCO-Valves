"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFirestore, useAuth, useUser } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export function ContactUs() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const db = useFirestore();
  const auth = useAuth();
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const targetEmail = "contact@amcovalves.com";
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const messageContent = formData.get("message") as string;
    
    // Structured for "Trigger Email" Firebase Extension
    const submissionData = {
      to: targetEmail,
      message: {
        subject: `New Inquiry from ${name}`,
        html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${messageContent}</p>
          <br>
          <p><em>Submitted via AMCO Valves Contact Form</em></p>
        `,
      },
      metadata: {
        name,
        email,
        phone,
        message: messageContent,
      },
      submittedAt: serverTimestamp(),
      status: "New",
    };

    try {
      if (!user) {
        await signInAnonymously(auth);
      }

      // We do not await this to allow for optimistic UI updates, 
      // but we handle errors via .catch() for the permission emitter.
      addDoc(collection(db, "contactSubmissions"), submissionData)
        .catch(async (error) => {
          const permissionError = new FirestorePermissionError({
            path: "contactSubmissions",
            operation: "create",
            requestResourceData: submissionData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });

      toast({
        title: "Inquiry Sent",
        description: `Thank you for reaching out. We will get back to you at ${email} soon.`,
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "We couldn't process your inquiry. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Contact</h3>
            <p className="text-lg text-foreground/70 mb-12">
              Have questions about our products or need a custom quote? Our technical support team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="size-9 md:size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Factory</h4>
                  <p className="text-foreground/60 text-sm">638/A Tiruvottriyur high road, Ajax, Chennai, 600019</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="size-9 md:size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Ware house</h4>
                  <p className="text-foreground/60 text-sm">104-A East Mada church street, Royapuram, Chennai, 600013</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="size-9 md:size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Mobile</h4>
                  <p className="text-foreground/60 text-sm">91-9841114671</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="size-9 md:size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-foreground/60 text-sm">contact@amcovalves.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
            <form onSubmit={handleSubmit} className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Full Name</label>
                  <Input name="name" required placeholder="John Doe" className="bg-background border-none h-12 focus-visible:ring-secondary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <Input name="email" required type="email" placeholder="john@example.com" className="bg-background border-none h-12 focus-visible:ring-secondary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Phone Number</label>
                <Input name="phone" required placeholder="91-00000-00000" className="bg-background border-none h-12 focus-visible:ring-secondary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Your Message</label>
                <Textarea name="message" required placeholder="How can we help you?" className="bg-background border-none min-h-[150px] focus-visible:ring-secondary resize-none" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg font-bold" variant="secondary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin size-8" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 size-8 md:size-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
