"use client";
import { Tooltip } from "@nextui-org/react";
import { MdVerified } from "react-icons/md";

const VERIFIED_COLOR = "#0ea5e9";
export default function Verified() {
  return (
    <Tooltip  content="Verified" color='foreground'><h1><MdVerified size={24} color={VERIFIED_COLOR} offset={-2}>
      </MdVerified></h1>
    </Tooltip>
  );
}
