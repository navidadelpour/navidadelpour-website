import React from "react";
import Image from "next/image";

import { NAME } from "@/consts/brand";

export default function Logo() {
  return (
    <>
      <span className="sr-only">{NAME}</span>
      <Image
        width={157}
        height={53.89}
        className=""
        src="/logo/navidadelpour-logo-white-stroke-logotype.svg"
        alt=""
      />
    </>
  );
}
