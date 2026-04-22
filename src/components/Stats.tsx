"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-gray-100 text-center">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <h2
          className={`text-3xl text-gray-700 md:text-4xl font-bold mb-2 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p
          className={`text-gray-600 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          <div
            className={`flex-1 flex flex-col items-center md:border-r md:border-gray-300 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4 transition-transform duration-300 hover:scale-105">
              10K+
            </div>
            <p className="text-gray-700 text-sm max-w-xs">
              Professionals Trained For Exceptional Career Success
            </p>
          </div>
          <div
            className={`flex-1 flex flex-col items-center md:border-r md:border-gray-300 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4 transition-transform duration-300 hover:scale-105">
              200+
            </div>
            <p className="text-gray-700 text-sm max-w-xs">
              Sessions Delivered With Unmatched Learning Excellence
            </p>
          </div>
          <div
            className={`flex-1 flex flex-col items-center transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4 transition-transform duration-300 hover:scale-105">
              5K+
            </div>
            <p className="text-gray-700 text-sm max-w-xs">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}