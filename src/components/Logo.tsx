import React from "react";
import Image from "next/image";

import { NAME } from "@/consts/brand";

// TODO: UPDATE LOGO.
export default function Logo() {
  return (
    <>
      <span className="sr-only">{NAME}</span>
      <Image
        width={157}
        height={32}
        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-8 w-auto"
        src="/next.svg"
        alt=""
      />
    </>
  );
}
