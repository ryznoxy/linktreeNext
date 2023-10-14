"use client";
import { SKILLS } from "./../constant/skill";
import { Tooltip } from "@nextui-org/react";

export default function SkillPills() {
  return (
    <div className="flex justify-start items-start ">
      {SKILLS.map(({ name, index, logo }) => (
          <h1 key={name} className="flex gap-2 bg-slate-600 rounded-full py-2 px-4 items-start justify-center text-white mx-2">
            {logo}
            <span>{name}</span>
          </h1>
      ))}
    </div>
  );
}
