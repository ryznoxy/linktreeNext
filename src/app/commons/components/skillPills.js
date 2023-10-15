import { SKILLS } from "./../constant/skill";


export default function SkillPills() {
  return (
    <div className="flex justify-start items-start p-2">
      {SKILLS.map(({ name, index, logo ,color }) => (
          <h1 key={index} className="flex gap-2 rounded-full py-2 px-4 items-start justify-center shadow-md  mx-2 dark:shadow-white/20">
            {logo}
            <span>{name}</span>
          </h1>
      ))}
    </div>
  );
}
