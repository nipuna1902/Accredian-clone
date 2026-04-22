"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of corporate training programs does Accredian offer?",
    a: "Accredian offers customized training programs across technology, leadership, data, and emerging domains tailored to organizational needs.",
  },
  {
    q: "Are the programs customizable for our organization?",
    a: "Yes, all programs are tailored based on your team's goals, skill gaps, and business requirements.",
  },
  {
    q: "What is the duration of these programs?",
    a: "Program duration varies depending on the scope and depth, ranging from short-term workshops to long-term certifications.",
  },
  {
    q: "Do you provide certifications?",
    a: "Yes, participants receive industry-recognized certifications upon successful completion.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 bg-gray-100 px-6">
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-12">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-4">
          
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-lg border-blue-200"
                    : "bg-white/70 border-gray-200 hover:shadow-md"
                }`}
              >

                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-blue-600 scale-110"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 pb-5 text-gray-600 text-sm transform transition-all duration-500 ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      {faq.a}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}