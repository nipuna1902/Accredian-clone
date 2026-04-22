"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/bayer.svg",
    text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: "/reliance.png",
    text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
  {
    logo: "/adp.svg",
    text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication and expertise.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-100 px-6">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-3">
          Testimonials from{" "}
          <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="text-gray-600 mb-12">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-2 md:px-4 flex justify-center"
              >
                <div className="bg-white p-8 rounded-xl border shadow-sm max-w-3xl w-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex justify-start">
                    <Image
                      src={t.logo}
                      alt="client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    “{t.text}”
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                index === i ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl object-contain drop-shadow-2xl mx-auto mt-20 px-6">
        <div className="relative bg-blue-600 text-white rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
          <div className="flex items-center gap-4 z-10">
            <div className="bg-white/20 p-4 rounded-xl">
              🎧
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-white/80 text-sm">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>
          <button className="z-10 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Contact Us →
          </button>
        </div>
      </div>

    </section>
  );
}