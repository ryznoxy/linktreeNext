"use client";
import Link from "next/link";
import { projectList } from "../constant/projectConst";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectBtn() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 20,
    });
  });
  return (
    <div className="flex justify-center items-center flex-col text-center text-sm space-y-4 mt-10 ">
      {projectList.map(({ name, link, index, icon, delay }) => (
        <Link
          key={index}
          href={link}
          className=" transition-all duration-300 ease-in-out hover:shadow-lg text-center py-4 px-32 border-2 rounded-xl shadow-md"
          data-aos="fade-down"
          data-aos-delay={delay}
          target="_blank"
        >
          <h1 key={index}>
            {icon}
            {name}
          </h1>
        </Link>
      ))}
    </div>
  );
}
