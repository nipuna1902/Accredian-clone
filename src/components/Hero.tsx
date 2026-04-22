"use client";

import Image from "next/image";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="home" className="px-6 py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-[#e9eef5] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 object-contain drop-shadow-xl">

          <div className="flex-1">
            <h1 className="text-4xl text-gray-900 md:text-5xl font-bold leading-tight mb-6">
              Next-Gen{" "}
              <span className="text-blue-600">Expertise</span> <br />
              For Your{" "}
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="text-gray-700 mb-6 text-lg">
              Cultivate high-performance teams through expert learning.
            </p>

            <div className="flex flex-wrap gap-6 mb-6 text-sm">
              <div className="flex text-gray-800 items-center gap-2">
                <span className="text-green-600">✔</span>
                Tailored Solutions
              </div>

              <div className="flex text-gray-800 items-center gap-2">
                <span className="text-green-600">✔</span>
                Industry Insights
              </div>

              <div className="flex text-gray-800 items-center gap-2">
                <span className="text-green-600">✔</span>
                Expert Guidance
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-blue-700 transition hover:scale-105"
            >
              Enquire Now
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/hero.webp"
              alt="Professionals"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}