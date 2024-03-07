import Image from "next/image";
import React from "react";

export const Logo = () => {
  return <Image src={"/logo.svg"} width={130} height={130} alt="logo" />;
};
