import React from 'react'
import { BackgroundBeams } from '@/Components/ui/background-beams'
import Image from 'next/image'
import { instagram, linkedin, discord, github } from '@/utils/icons'
import { footerNavLinks } from "@/utils/utils";
import Link from 'next/link'




function Footer_Section() {
  return (
    <footer className="relative mt-[5rem] flex md:border-2 mx-6 lg:mx-[4rem] md:mb-14 rounded-2xl">
      <div className="relative mx-0 flex flex-col xl:mx-[14rem] md:mx-8 lg:mx-16 md:flex-row z-50">
        <div className="md:pt-[5rem] pb-16 md:w-[350px] flex flex-col gap-4 pr-8 md:border-r-2 sm:w-full">
          <div className="flex items-center gap-4">
            <Image
              src="/Cody-Nerds.webp"
              alt="logo"
              width={180}
              height={180}
            />
          </div>
          <p>
          Want to connect? Follow me on social media and let's chat! Feel free to reach out via any of the platforms below.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.instagram.com/anasfarooq44/"
              className="bg-2 w-[3rem] h-[3rem] rounded-lg text-gray-300 text-2xl flex items-center justify-center border-2 border-color-2 shadow-sm cursor-pointer transition-all duration-[300ms] hover:bg-purple-500"
            >
              {instagram}
            </a>
            <a
              href="https://discord.gg/FGunPKZUp3"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-color-2 shadow-sm cursor-pointer transition-all duration-[300ms] hover:bg-purple-500"
            >
              {discord}
            </a>
            <a
              href="https://www.linkedin.com/in/anas-farooq06/"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-color-2 shadow-sm cursor-pointer transition-all duration-[300ms] hover:bg-purple-500"
            >
              {linkedin}
            </a>
            <a
              href="https://github.com/Anas-Farooq-codes"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-color-2 shadow-sm cursor-pointer transition-all duration-[300ms] hover:bg-purple-500"
            >
              {github}
            </a>
          </div>
        </div>

        <div className="md:pt-[5rem] flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {footerNavLinks.map((navLink, index) => {
            return (
              <div key={index} className="md:pl-14 xl:pl-14 w-full">
                <h2 className="text-2xl text-white font-bold">
                  {navLink.title}
                </h2>
                <ul className="mt-4">
                  {navLink.links.map((link, index) => {
                    return (
                      <li key={index} className="mt-2">
                        {link.url ? (
                          <Link
                            href={link.url}
                            className="text-gray-300 hover:text-white"
                          >
                            {link.name}
                          </Link>
                        ) : link.email ? (
                          <a
                            href={`mailto:${link.email}`}
                            className="text-gray-300 hover:text-white"
                          >
                            {link.name}: {link.email}
                          </a>
                        ) : link.phone ? (
                          <a
                            href={`tel:${link.phone}`}
                            className="text-gray-300 hover:text-white"
                          >
                            {link.name}: {link.phone}
                          </a>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>

                {index === 2 && (
                  <form className="w-full">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full mt-4 p-2 bg-2 text-gray-300 rounded-md"
                    />
                  </form>
                )}
              </div>
            );
          })}

          <div className="mt-14 md:ml-14 py-4 text-gray-300 col-span-full text-center border-t-2">
            <p>
              Copyright &copy; {new Date().getFullYear()}
              <span className="cursor-pointer hover:text-purple-500 transition-all"><a href="https://www.linkedin.com/in/anas-farooq06/"> Anas Codes.</a> </span> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
}

export default Footer_Section;
