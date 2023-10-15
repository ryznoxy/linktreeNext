import { SiHtml5,SiTailwindcss,SiCss3,SiBootstrap,SiNextdotjs,SiJavascript } from "react-icons/si";

const SKILL_SIZE = 24 ;

export const SKILLS = [
  {
    name: "HTML",
    logo: <SiHtml5 size={SKILL_SIZE} color='#E96228'/>,
  },
  {
    name: "CSS",
    logo: <SiCss3 size={SKILL_SIZE} color='#254BDD'/>,
    
  },
  {
    name: "JavaScript",
    logo: <SiJavascript size={SKILL_SIZE} color='#EFD81D'/>,
    
  },
  {
    name: "Nextjs",
    logo: <SiNextdotjs size={SKILL_SIZE}/>,
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss size={SKILL_SIZE} color='#38BDF8'/>,
    
  },
  {
    name: "Bootstrap",
    logo: <SiBootstrap size={SKILL_SIZE} color='#730FEF'/>,
  },
];
