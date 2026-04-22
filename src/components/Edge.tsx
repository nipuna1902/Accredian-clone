import Image from "next/image";

export default function Edge() {
  return (
    <section id="edge" className="py-24 bg-gray-100 text-center">

      <div className="mb-12 px-6">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-3">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Key Aspects of{" "}
          <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Image
          src="/edge.svg"
          alt="Accredian Edge Diagram"
          width={1200}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

    </section>
  );
}