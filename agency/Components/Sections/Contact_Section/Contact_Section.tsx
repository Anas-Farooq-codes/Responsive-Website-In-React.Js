import { BackgroundBeams } from '@/Components/ui/background-beams';
import Image from "next/image";
import React from "react";

function ContactSection() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 bg-2 overflow-hidden">
      <div className="relative pl-6 pr-6 lg:pr-0 md:pl-8 lg:pl-16 xl:pl-[18rem] py-[6rem] text-white z-20">
        <h4 className="py-2 px-4 text-sm uppercase md:font-semibold md:text-base mb-4 rounded-tl-[12px] rounded-br-[12px] gradient-purple">
          Reach out to us
        </h4>
        <h2 className="font-bold text-xl md:text-4xl">
          To get instant guidance and support, please contact us.
        </h2>

        <form action="" className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-4"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-4"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-4 resize-none"
              rows={6}
            />
          </div>
          <button
            className="bg-purple-500 text-white font-semibold py-4 rounded-md
            hover:bg-purple-500/90 transition-all duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="relative z-20 hidden lg:inline-block">
        <img
          src="/images/image--contact.webp"
          width={500}
          height={500}
          alt="team"
          className="object-cover w-full h-full absolute top-0 left-[3rem]"
        />
      </div>
      <BackgroundBeams />
    </section>
  );
}

export default ContactSection;