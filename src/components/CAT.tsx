import Image from "next/image";

export default function Cat() {
  return (
    <section id="cat" className="py-24 bg-gray-100 text-center">

      <div className="mb-16 px-6">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-3">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Image
          src="/cat.svg"
          alt="CAT Framework"
          width={1200}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

    </section>
  );
}