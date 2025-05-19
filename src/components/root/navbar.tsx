"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import Clock2 from "../root/Clock2";
import { Particles } from '@tsparticles/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "home", href: "/" },
    { text: "projects", href: "/projects" },
    { text: "contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "w-sm lg:container  mx-auto transition-all duration-500 ease-in-out",
          scrolled ? "max-w-2xl lg:max-w-4xl" : ""
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between",
            "rounded-2xl px-4 py-2",
            "bg-white/80 dark:bg-background/80 backdrop-blur-lg",
            "border border-primary/5 dark:border-primary/10",
            "shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(255,255,255,0.02)]"
          )}
        >
          <Link
            href="/"
            className="text-lg font-bold relative group flex items-center gap-2"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://i.ibb.co/zVzyc0P4/q-Ta7b-KK0-400x400.jpg"
                alt="Avatar"
                className="rounded-full w-12 h-12"
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span className="font-['Nothing_You_Could_Do'] text-2xl">ATHARVA</span>
          </Link>

          {/* Clock in the center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Clock2 className="text-s opacity-70" showLocation={false}  />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover-underline font-mono text-m dark:!text-gray-100 text-black relative group"
              >
                {item.text}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in mt-2">
            <div className="flex flex-col space-y-4 rounded-xl bg-background/90 backdrop-blur-lg p-4 border border-primary/5 dark:border-primary/10 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover-underline text-2xl font-bold py-2 text-black dark:text-white"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function ParticleBG() {
  return (
    <Particles
      options={{
        background: { color: "#18181b" },
        particles: {
          color: { value: "#fff" },
          links: { enable: true, color: "#6366f1" },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
