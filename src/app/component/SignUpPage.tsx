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

const AccountPage = () => {
  return (
    <div className="w-full flex justify-center md:justify-between py-10 pb-20">
      <div
        className={`${poppins.className} flex flex-col md:flex-row w-full md:w-[90%] max-w-[1305px] md:gap-[129px] gap-10 items-center`}
      >
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <div className="h-[300px] md:h-[640px] w-full md:w-[805px] bg-lightBlue flex items-center rounded-md">
            <Image
              src={"/images/accountImage.png"}
              width={919}
              height={706}
              alt="Iphone"
              className="max-h-full max-w-full object-cover"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[50%] px-4 md:px-0">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2
                className={`${inter.className} font-medium text-[24px] md:text-[36px]`}
              >
                Create an Account
              </h2>
              <h4 className={`text-[14px] md:text-[16px] ${poppins.className}`}>
                Enter your details below
              </h4>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-5">
              <input
                className="p-2 w-full md:w-[370px] h-[40px] border-b-2 border-customLine text-customBlack placeholder-opacity-50 focus:outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-2 w-full md:w-[370px] h-[40px] border-b-2 border-customLine text-customBlack placeholder-opacity-50 focus:outline-none"
                type="text"
                placeholder="Email or Phone Number"
              />
              <input
                className="p-2 w-full md:w-[370px] h-[40px] border-b-2 border-customLine text-customBlack placeholder-opacity-50 focus:outline-none"
                type="text"
                placeholder="Password"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full md:w-[371px] bg-blue-500 h-[56px] bg-customRed text-white rounded-md">
                Create Account
              </button>
              <button className="w-full md:w-[371px] h-[56px] border-2 border-customBlack/40 flex items-center justify-center gap-4 rounded-md text-customBlack">
                <Image
                  src={"/images/Icon-Google.png"}
                  width={24}
                  height={24}
                  alt="Icon-Google"
                />
                <span>Sign up with Google</span>
              </button>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
                <h3 className="text-[14px] md:text-[16px] text-customBlack opacity-70">
                  Already have an account?
                </h3>
                <Link
                  href="/Login"
                  className="text-customBlack opacity-70 border-b-2 border-customLine font-medium"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
