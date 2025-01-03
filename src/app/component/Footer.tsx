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
    <div className="bg-slate-100 dark:bg-zinc-900 text-footerText">
      <div className="flex flex-col items-center px-6 py-8 md:flex-row mt-10 md:px-16 lg:px-24">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 w-full max-w-[1300px]">
          {/* Exclusive Section */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${inter.className} font-bold text-[24px] md:text-[28px]`}>
              Exclusive
            </h2>
            <h3 className={`${poppins.className} font-medium text-[18px]`}>
              Subscribe
            </h3>
            <h4 className={`${poppins.className} text-[16px] opacity-90`}>
              Get 10% off your first order
            </h4>
            <div className="flex w-full h-[48px] border-2 border-customText items-center px-2">
              <input
                placeholder="Enter your email"
                className={`text-[16px] flex-grow outline-none ${poppins.className} bg-transparent`}
                type="text"
              />
              <VscSend className="cursor-pointer w-[24px] h-[24px] text-customText" />
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Support
            </h2>
            <h4 className={`${poppins.className} text-[16px]`}>
              111 Bijoy Sarani, Dhaka, Bangladesh
            </h4>
            <h4 className={`${poppins.className} text-[16px]`}>
              +88015-88888-9999
            </h4>
          </div>

          {/* Account Section */}
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

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Quick Link
            </h2>
            <h4 className={`${poppins.className} text-[16px]`}>
              Privacy Policy
            </h4>
            <h4 className={`${poppins.className} text-[16px]`}>Terms of Use</h4>
            <h4 className={`${poppins.className} text-[16px]`}>FAQ</h4>
            <h4 className={`${poppins.className} text-[16px]`}>Contact</h4>
          </div>

          {/* Download App Section */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className={`${poppins.className} font-medium text-[20px]`}>
              Download App
            </h2>
            <h4 className={`${poppins.className} text-[14px] opacity-90`}>
              Save $3 with App New User Only
            </h4>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <Image
                src={"/images/Qr Code.png"}
                width={80}
                height={80}
                alt="QR Code"
              />
              <div className="flex flex-col gap-2">
                <Image
                  src={"/images/playstorelogo.png"}
                  width={120}
                  height={40}
                  alt="PlayStore"
                />
                <Image
                  src={"/images/download-appstore.png"}
                  width={120}
                  height={40}
                  alt="AppStore"
                />
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-[26px] md:justify-start">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-customText/20 w-full">
        <div className="flex justify-center py-6">
          <div className={`${poppins.className} text-[16px] text-customText/50`}>
            &copy; Copyright Rimel 2022. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
