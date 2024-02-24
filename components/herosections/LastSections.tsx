import Image from "next/image";

import bgMobileFirst from "@/public/bg-boost-mobile.svg";
import bgDesktop from "@/public/bg-boost-desktop.svg";
import facebook from "@/public/icon-facebook.svg";
import twitter from "@/public/icon-twitter.svg";
import pinterest from "@/public/icon-pinterest.svg";
import instagram from "@/public/icon-instagram.svg";

export default function LastSections() {
  return (
    <div>
      <div className="text-center relative bg-purple-950 ">
        <Image
          src={bgMobileFirst}
          alt="boost mobile bg"
          width={900}
          height={10}
          className="h-64 md:hidden"
        />

        <Image
          src={bgDesktop}
          alt="boost mobile bg"
          width={900}
          height={10}
          className="h-64 md:flex md:w-full hidden"
        />
        <div className="absolute top-14 right-0 left-0">
          <h2 className="font-extrabold text-white text-2xl pt-10 xl:text-5xl">
            Boost your links today
          </h2>
          <button className="bg-sky-400 text-white py-2 px-8 mt-5 font-sans text-xl rounded-3xl font-semibold">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-cyan-950 pb-12 md:px-10 md:flex md:justify-between md:items-center xl:px-40">
        <div className="pt-8">
          <h2 className="text-center text-2xl text-white font-extrabold">
            Shortly
          </h2>
        </div>
        <div className="text-center md:text-left">
          <p className="text-white text-sm font-semibold mt-9">Features</p>
          <div className="text-center md:text-left gap-y-3 md:text-sm">
            <p className="text-slate-400 mt-4">Link shortening</p>
            <p className="text-slate-400">Branded links</p>
            <p className="text-slate-400">Analytics</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-white text-sm font-semibold mt-6 md:mt-9">
            Resources
          </p>
          <div className="text-center md:text-left gap-y-3 md:text-sm">
            <p className="text-slate-400 mt-4">Blog</p>
            <p className="text-slate-400">Developers </p>
            <p className="text-slate-400">Supports</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-white text-sm font-semibold mt-6 md:mt-14">
            Company
          </p>
          <div className="text-center md:text-left gap-y-3 md:text-sm">
            <p className="text-slate-400 mt-4">About</p>
            <p className="text-slate-400">Our Team</p>
            <p className="text-slate-400">Careers</p>
            <p className="text-slate-400">Contact</p>
          </div>
        </div>

        <div className="flex space-x-5 justify-center items-center mt-14 md:-mt-9">
          <Image
            src={facebook}
            alt="facebook"
            width={50}
            height={50}
            className="w-6 h-6"
          />

          <Image
            src={twitter}
            alt="facebook"
            width={50}
            height={50}
            className="w-6 h-6"
          />

          <Image
            src={pinterest}
            alt="facebook"
            width={50}
            height={50}
            className="w-6 h-6"
          />

          <Image
            src={instagram}
            alt="facebook"
            width={50}
            height={50}
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
