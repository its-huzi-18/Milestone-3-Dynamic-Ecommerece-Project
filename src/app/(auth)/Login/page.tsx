import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Login = () => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center  md:justify-between my-10 pb-10  ${poppins.className}`}
    >
      <div
        className={`flex flex-col md:flex-row items-center md:gap-16 w-full`}
      >
        {/* Left Section */}
        <div className="relative bg-lightBlue rounded-t-md md:rounded-tr-none md:rounded-bl-md w-full md:w-1/2 h-80 md:h-[640px] flex items-center justify-center">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={"/images/accountImage.png"}
            alt="Iphone"
            width={919}
            height={706}
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full p-6">
          <div className="flex flex-col gap-2">
            <h2
              className={`${inter.className} text-xl md:text-3xl font-medium text-customBlack`}
            >
              Log in to Exclusive
            </h2>
            <h4 className="text-sm md:text-base">Enter your details below</h4>
          </div>

          <div className="flex flex-col gap-4">
            <input
              className="px-2 w-full md:w-[370px] h-10 border-b-2 border-customLine/80 text-customBlack focus:outline-none"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="px-2 w-full md:w-[370px] h-10 border-b-2 border-customLine/80 text-customBlack focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 w-full md:w-[370px]">
            <button className="underline w-full md:w-[143px] h-12 bg-customRed text-customText rounded-md text-sm md:text-base font-medium">
              Log In
            </button>
            <Link href="#" className="text-customRed text-sm md:text-base">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
