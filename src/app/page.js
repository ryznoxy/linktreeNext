"use client";

import ButtonSocials from "./commons/components/ButtonSocial";
import Verified from "./commons/components/verified";
import ProjectBtn from "./commons/components/projectBtn";
import MarqueeComponents from "./commons/components/MarqueeComponents";
import { ThemeSwitcher } from "./commons/components/ThemeSwitcher";
import PfpMe from './commons/components/PfpMe';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 20,
    });
  });
  return (
    <>
      <div className="max-w-md mx-auto container " data-aos="fade-down">
        <div className="flex flex-warp items-center flex-col  h-scree n mx-4">
          
          <div className=" relative w-full">
            <ThemeSwitcher />
          </div>
          <PfpMe />
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <h2 className="text-xl font-semibold ">Reza Adi N</h2>
            <Verified></Verified>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-200  text-sm mx-4 text-center  ">
            Beginner Front end dev with 1 months experience
          </p>
          <p className="mt-8  text-md mx-4 text-center ">Lets get connected</p>
          <ButtonSocials></ButtonSocials>
          <ProjectBtn/>
          <MarqueeComponents />
        </div>
      </div>
    </>
  );
}
