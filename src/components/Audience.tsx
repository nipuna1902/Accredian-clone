"use client";

import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

export default function Audience() {
  return (
    <section className="py-20 bg-gray-100 px-6">
      
      <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 object-contain drop-shadow-xl">
        
        <div className="flex-1">
          <p className="mb-2 text-2xl opacity-90">Who Should Join?</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Strategic Skill Enhancement
          </h2>

          <Image
            src="/strategic-skill.png"
            alt="Audience"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8 text-sm">
          <div className="flex flex-col items-start gap-2">
            <MonitorCheck size={32} />
            <h3 className="font-semibold text-lg">Tech Professionals</h3>
            <p className="text-white/80">
              Enhance expertise, embrace tech, drive innovation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <MonitorX size={32} />
            <h3 className="font-semibold text-lg">Non-Tech Professionals</h3>
            <p className="text-white/80">
              Adapt digitally, collaborate in tech environments.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <GraduationCap size={32} />
            <h3 className="font-semibold text-lg">Emerging Professionals</h3>
            <p className="text-white/80">
              Develop powerful skills for rapid career growth.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Briefcase size={32} />
            <h3 className="font-semibold text-lg">Senior Professionals</h3>
            <p className="text-white/80">
              Strengthen leadership, enhance strategic decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}