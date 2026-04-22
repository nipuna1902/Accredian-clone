"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function EnquiryModal({ open, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      setForm({ ...form, phone: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: any = {};

    if (form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!form.email.includes("@"))
      newErrors.email = "Enter a valid email";

    if (form.phone.length !== 10)
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!form.company)
      newErrors.company = "Company name is required";

    if (!form.domain)
      newErrors.domain = "Select a domain";

    if (!form.candidates)
      newErrors.candidates = "Enter number of candidates";

    if (!form.mode)
      newErrors.mode = "Select mode of delivery";

    if (!form.location)
      newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Form submitted successfully!");
      onClose();
    } else {
      alert("Error submitting form");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[90%] md:w-[800px] h-[90%] rounded-xl overflow-hidden flex relative">

        <div className="hidden md:block w-1/2 relative">
          <Image src="/enquiry.webp" alt="enquiry" fill className="object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-gray-800 font-semibold">Enquire Now</h2>
            <button onClick={onClose}>
              <X className="text-gray-500 hover:text-black" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm">

            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                maxLength={10}
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.company ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            <div>
              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className={`w-full border-b py-2 outline-none text-gray-800 ${errors.domain ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="" className="text-gray-400">Select Domain</option>
                <option>AI</option>
                <option>Data</option>
              </select>
              {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain}</p>}
            </div>

            <div>
              <input
                name="candidates"
                value={form.candidates}
                onChange={handleChange}
                placeholder="No. of candidates"
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.candidates ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.candidates && <p className="text-red-500 text-xs mt-1">{errors.candidates}</p>}
            </div>

            <div>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className={`w-full border-b py-2 outline-none text-gray-800 ${errors.mode ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="" className="text-gray-400">Select Mode of Delivery</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              {errors.mode && <p className="text-red-500 text-xs mt-1">{errors.mode}</p>}
            </div>

            <div>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className={`w-full border-b py-2 outline-none text-gray-800 placeholder-gray-400 ${errors.location ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}