"use client";

import { X } from "lucide-react";
import Image from "next/image";

export default function EnquiryModal({ open, onClose }: any) {
  if (!open) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      domain: formData.get("domain"),
      candidates: formData.get("candidates"),
      mode: formData.get("mode"),
      location: formData.get("location"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Form submitted successfully!");
        e.target.reset();
        onClose();
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[90%] md:w-[800px] h-[90%] rounded-xl overflow-hidden flex relative animate-slideUp">
        
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/enquiry.webp"
            alt="enquiry"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-gray-700 font-semibold">
              Enquire Now
            </h2>
            <button onClick={onClose}>
              <X className="text-gray-500 hover:text-black" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm">
            
            <input
              name="name"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="Enter Name"
            />

            <input
              name="email"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="Enter Email"
            />

            <input
              name="phone"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="+91 Phone Number"
            />

            <input
              name="company"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="Enter company name"
            />

            <select
              name="domain"
              className="border-b border-gray-300 text-gray-800 outline-none py-2 bg-transparent focus:border-blue-600 transition"
            >
              <option value="">Select Domain</option>
              <option>AI</option>
              <option>Data</option>
            </select>

            <input
              name="candidates"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="Enter No. of candidates"
            />

            <select
              name="mode"
              className="border-b border-gray-300 text-gray-800 outline-none py-2 bg-transparent focus:border-blue-600 transition"
            >
              <option value="">Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
            </select>

            <input
              name="location"
              className="border-b border-gray-300 text-gray-800 placeholder-gray-400 outline-none py-2 bg-transparent focus:border-blue-600 transition"
              placeholder="Eg: Gurgaon, Delhi, India"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}