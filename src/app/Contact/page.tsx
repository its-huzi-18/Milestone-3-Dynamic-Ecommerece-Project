import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className=" md:max-w-[1280px] mx-auto min-h-[70vh] md:py-20 sm:py-10 py-6 px-4">
      {/* Breadcrumb */}
      <div className="text-customBlack text-[14px] flex gap-2 mb-10">
        <Link className="opacity-50" href="/">
          Home
        </Link>
        <span>/</span>
        <Link href="/Contact" className="font-medium">
          Contact
        </Link>
      </div>

      {/* Contact and Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-14">
        {/* Contact Details */}
        <div className="dark:bg-zinc-800 flex flex-col md:w-[35%] w-full h-auto space-y-6 p-6 shadow-black/40 shadow-md rounded-md bg-white">
          {/* Call To Us */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-600 p-3">
              <Image
                src={"/images/phoneIcon.png"}
                alt={"call phone"}
                width={24}
                height={24}
              />
            </div>
            <span className=" text-xl font-medium">Call To Us</span>
          </div>
          <p className="text-zinc-700 dark:text-slate-200">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-zinc-700 pb-2 dark:text-slate-200">
            Phone: +8801611112222
          </p>

          <hr className="border-zinc-300" />

          {/* Write To Us */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-600 p-3">
              <Image
                src={"/images/mailIcon.png"}
                alt={"email"}
                width={24}
                height={24}
              />
            </div>
            <span className="text-xl font-medium">Write To Us</span>
          </div>
          <p className="text-zinc-700 dark:text-slate-200">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="dark:text-slate-200 text-zinc-700">
            Emails: customer@exclusive.com
          </p>
          <p className="dark:text-slate-200 text-zinc-700">
            Emails: support@exclusive.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="dark:bg-zinc-800 flex-1 w-full shadow-black/40 shadow-md rounded-md bg-white p-6">
          <form action="" className="space-y-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                className="dark:bg-zinc-700 dark:placeholder:text-slate-300 px-4 py-3 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none rounded-md"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className="px-4 py-3 dark:bg-zinc-700 dark:placeholder:text-slate-300 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none rounded-md"
                placeholder="Your Email"
              />
              <input
                type="tel"
                name="phone"
                className="px-4 py-3 dark:bg-zinc-700 dark:placeholder:text-slate-300 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none rounded-md"
                placeholder="Your Phone"
              />
            </div>

            {/* Message Box */}
            <textarea
              name="message"
              rows={5}
              className="w-full px-4 py-3 dark:bg-zinc-700 dark:placeholder:text-slate-300 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none resize-none rounded-md"
              placeholder="Your Message"
            ></textarea>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 dark:bg-zinc-500 text-white font-medium rounded-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
