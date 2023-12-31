import {
  BsGithub,
  BsInstagram,
  BsDiscord,
  BsYoutube,
  BsTiktok,
} from "react-icons/bs";

const ICONS_SIZE = 20;


export const SOCIAL_LINKS = [
  {
    label: "Github",
    href: "https://github.com/ryznoxy",
    icon: <BsGithub size={ICONS_SIZE} ></BsGithub>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/r7zaa_",
    icon: <BsInstagram size={ICONS_SIZE} ></BsInstagram>,
  },
  {
    label: "Discord",
    href: "http://discord.com/users/274076893240754176",
    icon: <BsDiscord size={ICONS_SIZE} ></BsDiscord>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/c/ryznoxy",
    icon: <BsYoutube size={ICONS_SIZE} ></BsYoutube>,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@ryznoxy",
    icon: <BsTiktok size={ICONS_SIZE} ></BsTiktok>,
  },
];
