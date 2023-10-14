import { SiHtml5,SiTailwindcss,SiCss3,SiBootstrap,SiNextdotjs,SiJavascript } from "react-icons/si";

const SKILL_SIZE = 24 ;

export const SKILLS = [
  {
    name: "HTML",
    logo: <SiHtml5 size={SKILL_SIZE}></SiHtml5>,
  },
  {
    name: "CSS",
    logo: <SiCss3 size={SKILL_SIZE}></SiCss3>,
  },
  {
    name: "JavaScript",
    logo: <SiJavascript size={SKILL_SIZE}></SiJavascript>,
  },
  {
    name: "Nextjs",
    logo: <SiNextdotjs size={SKILL_SIZE}></SiNextdotjs>,
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss size={SKILL_SIZE}></SiTailwindcss>,
  },
  {
    name: "Bootstrap",
    logo: <SiBootstrap size={SKILL_SIZE}></SiBootstrap>,
  },
];
