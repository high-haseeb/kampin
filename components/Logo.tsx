import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <div className="absolute top-10 left-20 ">
        <Image src="/logo/logo.png" alt="logo" width={150} height={100} />
      </div>
    </Link>
  );
};

export default Logo;
