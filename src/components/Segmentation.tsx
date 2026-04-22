"use client";

import Image from "next/image";

const cards = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "/program.webp",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "/industry.webp",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "/topic.webp",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "/level.webp",
  },
];

export default function Segmentation() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-2">
        Tailored <span className="text-blue-600">Course Segmentation</span>
      </h2>

      <p className="text-gray-600 mb-12">
        Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <Image
                src={c.img}
                alt={c.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="p-4 relative z-10">
              <h3 className="text-blue-600 font-semibold mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
                {c.title}
              </h3>

              <p className="text-gray-600 text-sm transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-gray-800">
                {c.desc}
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-all duration-500"></div>

          </div>
        ))}

      </div>
    </section>
  );
}