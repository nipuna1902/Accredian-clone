"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/reliance.png", alt: "Reliance" },
  { src: "/hcl.png", alt: "HCL" },
  { src: "/ibm.png", alt: "IBM" },
  { src: "/crif.png", alt: "CRIF" },
  { src: "/adp.svg", alt: "ADP" },
  { src: "/bayer.svg", alt: "Bayer" },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className="py-20 bg-gray-100 text-center">
      
      <div ref={ref}>
        <h2
          className={`text-3xl text-gray-700 md:text-4xl font-bold mb-2 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p
          className={`text-gray-600 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12 px-5">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`w-28 md:w-32 flex justify-center transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}