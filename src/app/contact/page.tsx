import Contact from "@/components/contact/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Atharva Mhaske",
  description: "Created by atharvaxdevs ",
};
const ContactPage = () => {
  return (
    <section className="py-16 md:py-24">
      <Contact />
    </section>
  );
};

export default ContactPage;
