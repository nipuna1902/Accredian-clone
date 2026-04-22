"use client";

import { BarChart, Monitor, Video } from "lucide-react";

const steps = [
  {
    icon: BarChart,
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    icon: Monitor,
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    icon: Video,
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-gray-100 text-center px-6">

      <div className="mb-16">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-3">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>

        <p className="text-gray-600">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="relative bg-white rounded-xl p-8 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
            >

              <div className="absolute top-4 left-4 w-6 h-6 text-sm rounded-full border border-gray-300 text-gray-700 flex items-center justify-center">
                {i + 1}
              </div>

              <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 text-white p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>
              </div>

              <h3 className="font-semibold  text-gray-700 text-lg mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}