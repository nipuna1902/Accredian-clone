"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Stats", id: "stats" },
  { name: "Clients", id: "clients" },
  { name: "Accredian Edge", id: "edge" },
  { name: "CAT", id: "cat" },
  { name: "How It Works", id: "how" },
  { name: "FAQs", id: "faqs" },
  { name: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = navLinks[i].id;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-8 py-4">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">accredian</h1>
          <p className="text-xs text-gray-400 -mt-1">
            credentials that matter
          </p>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative pb-1 transition ${
                active === link.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-white border rounded-xl p-4 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-left transition ${
                active === link.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

    </nav>
  );
}