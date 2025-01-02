import React from "react";
import { Poppins, Inter } from "next/font/google";
import { VscSend } from "react-icons/vsc";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Footer = () => {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900  text-footerText">
      <div className="flex flex-col items-center px-4 py-8 md:flex-row mt-10 md:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:space-x-[60px] w-full max-w-[1170px]">
          {/* Exclusive */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${inter.className} font-bold text-[24px]`}>
              Exclusive
            </h2>
            <h3 className={`${poppins.className} font-medium text-[20px]`}>
              Subscribe
            </h3>
            <h4 className={`${poppins.className} text-[16px] opacity-95`}>
              Get 10% off your first order
            </h4>
            <div className="flex w-full h-[48px] border-2 border-customText items-center justify-center gap-4">
              <input
                placeholder="Enter your email"
                className={`text-[16px] w-[140px] ${poppins.className} border-none bg-transparent`}
                type="text"
              />
              <VscSend className="cursor-pointer w-[24px] h-[24px]" />
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Support
            </h2>
            <h4 className={`${poppins.className} text-[16px] opacity-95`}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h4>
            <h4 className={`${poppins.className} text-[16px] opacity-95`}>
              +88015-88888-9999
            </h4>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Account
            </h2>
            <h4 className={`${poppins.className} text-[16px]`}>My Account</h4>
            <h4 className={`${poppins.className} text-[16px]`}>
              Login / Register
            </h4>
            <h4 className={`${poppins.className} text-[16px]`}>Cart</h4>
            <h4 className={`${poppins.className} text-[16px]`}>Wishlist</h4>
            <h4 className={`${poppins.className} text-[16px]`}>Shop</h4>
          </div>

          {/* Quick Link */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Quick Link
            </h2>
            <h4 className={`${poppins.className} text-[16px]`}>
              Privacy Policy
            </h4>
            <h4 className={`${poppins.className} text-[16px]`}>Terms Of Use</h4>
            <h4 className={`${poppins.className} text-[16px]`}>FAQ</h4>
            <h4 className={`${poppins.className} text-[16px]`}>Contact</h4>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Download App
            </h2>
            <h4 className={`${poppins.className} text-[12px] opacity-90`}>
              Save $3 with App New User Only
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="row-span-2">
                <Image
                  src={"/images/Qr Code.png"}
                  width={80}
                  height={80}
                  alt="barCode"
                />
              </div>
              <Image
                src={"/images/playstorelogo.png"}
                width={110}
                height={40}
                alt="PlayStore"
              />
              <Image
                src={"/images/download-appstore.png"}
                width={110}
                height={40}
                alt="AppStore"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4 text-[24px] md:justify-start">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-customText/20 w-full ">
        <div className="flex justify-center py-6">
          <div
            className={`${poppins.className} text-[16px] text-customText/50`}
          >
            &copy; Copyright Rimel 2022. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
