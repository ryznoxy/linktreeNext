"use client";
import { SOCIAL_LINKS } from "../constant/social-link";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

export default function ButtonSocials() {
  return (
    <div className="flex justify-center items-center">
      {SOCIAL_LINKS.map(({ label, href, index, icon }) => (
        <Tooltip
          key={index}
          content={label}
          size={"sm"}
          color="foreground"
          offset={-2}
        >
          <Link
            key={label}
            href={href}
            className="m-2 p-2 rounded-full "
            target="_blank"
            aria-label={label}
          >
            {icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
