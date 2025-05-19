"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Have a project in mind or want to chat? I&apos;m always open to
              discussing new opportunities and ideas.
            </p>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="min-h-[150px]"
                required
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-end"
            >
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.form>

          {/* Alternative Contact Methods */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">
                  atharva@example.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Mumbai, India
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 