import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-primary to-accent shadow-sm" />
      <span className="font-extrabold tracking-tight text-lg">
        <span className="text-gradient">Attend</span>IQ
      </span>
    </Link>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/prototype", label: "Prototype" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How it works" },
];

export function SiteHeader() {
  const location = useLocation();
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      console.error(e);
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-foreground/80",
                  isActive || location.hash === item.to.replace("/#", "#")
                    ? "text-foreground"
                    : "text-foreground/60",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <a href="#contact">Contact</a>
          </Button>

          <Button asChild>
            <a href="#demo">Request demo</a>
          </Button>

          <Button
            variant="ghost"
            onClick={() => setIsDark((s) => !s)}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
