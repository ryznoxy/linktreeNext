"use client"
import SkillPills from "./skillPills";
import Marquee from "react-fast-marquee";
import { BiCodeAlt } from "react-icons/bi";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MarqueeComponents() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  });
  return (
    <>
      <div className="max-w-sm px-4 mt-20" data-aos='fade' data-aos-delay="200">
        <p className="my-3 font-medium flex items-center gap-2"><span className='text-2xl'><BiCodeAlt></BiCodeAlt></span>My Skill</p>
        <Marquee speed={30}>
          <SkillPills></SkillPills>
        </Marquee>
        <Marquee direction="right" speed={30} className="mt-2 mb-10">
          <SkillPills></SkillPills>
        </Marquee>
      </div>
    </>
  );
}
