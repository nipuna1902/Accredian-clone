"use client";

import {
  Lightbulb,
  Brain,
  Users,
  BarChart,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

const domains = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: BarChart },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: CreditCard },
];

export default function Domain() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-2">
        Our <span className="text-blue-600">Domain Expertise</span>
      </h2>

      <p className="text-gray-600 mb-12">
        <span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        
        {domains.map((d, i) => {
          const Icon = d.icon;
          const isLast = i === domains.length - 1;

          return (
            <div
              key={i}
              className={`group relative bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:border-blue-200
              ${isLast ? "md:col-start-2" : ""}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10 mb-4 p-4 rounded-full bg-blue-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                <Icon className="text-blue-600 transition-transform duration-300 group-hover:rotate-6" size={32} />
              </div>
              <h3 className="relative z-10 font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {d.title}
              </h3>

            </div>
          );
        })}

      </div>
    </section>
  );
}