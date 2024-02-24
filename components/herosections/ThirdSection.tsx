"use client";

import { useState } from "react";
import { Shorten } from "@/components/ShortenComp";

import Image from "next/image";
import BrandRecongition from "@/public/icon-brand-recognition.svg";
import DetailedRecord from "@/public/icon-detailed-records.svg";
import fullyCustom from "@/public/icon-fully-customizable.svg";
import bgInputMobile from "@/public/bg-shorten-mobile.svg";
import bgInputDesktop from "@/public/bg-shorten-desktop.svg";

export default function ThirdSection() {
  const [myUrl, setMyUrl] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState("");
  const [error, setIsError] = useState(false);

  async function handleUrl(e: any) {
    e.preventDefault();
    const url = e.target[0].value;
    if (!url || !url.includes("https://")) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }
    console.log(url);

    try {
      setIsLoading(true);
      const data = await Shorten(url);
      console.log(url);
      console.log(data);
      setMyUrl((current) => [...current, { link: url, shorten: data }]);
    } catch (error) {
      alert("Please make sure your internet is working well!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(link);
    } catch (error) {
      console.error(error);
    }
  }

  const uniqueUrl = myUrl.filter(
    (c, index) => myUrl.findIndex((o: any) => c.link === o.link) === index
  );
  console.log(uniqueUrl);

  return (
    <div className="bg-slate-200 relative  mt-36 pb-24">
      <div className=" flex flex-col md:flex-row md:justify-center p-4 md:p-0 md:items-center bg-purple-200 md:bg-transparent md:space-x-4  w-2/3 xl:w-4/5 mx-auto absolute right-0 left-0  -top-32 md:-top-20 mt-14 rounded-lg">
        <Image
          src={bgInputMobile}
          alt="bg image input"
          width={1000}
          height={20}
          className="w-2/3 h-5/6 right-0 bottom-5 md:hidden absolute "
        />

        <Image
          src={bgInputDesktop}
          alt="bg image input"
          width={1000}
          height={20}
          className="w-full absolute hidden md:flex bg-slate-600  rounded-lg"
        />

        <form onSubmit={handleUrl} className="w-full h-fit">
          <div className="relative md:flex md:justify-center space-y-4 md:space-y-0 md:items-center md:space-x-4">
            <input
              disabled={isLoading}
              type="text"
              placeholder="Shorten a link here..."
              className={
                error
                  ? "border-2 border-red-500 rounded-md  w-full h-8 px-2 md:w-[65%] md:h-10 md:px-3xl:text-lg  xl:px-6 xl:py-8"
                  : "rounded-md py-2 w-full px-2 md:w-[65%] h-8 md:h-10 md:px-3 md:py-0 xl:text-lg  xl:px-6 xl:py-8"
              }
            />

            <button
              disabled={isLoading}
              className="text-center md:w-[18%] w-full  text-white bg-sky-500 h-8 md:h-10 xl:h-16 md:px-0 rounded-md xl:py-4 xl:text-xl"
            >
              Shorten It!
            </button>
          </div>
          {error && (
            <div className=" md:left-16 lg:left-20 xl:left-24 mt-0 absolute text-[10px] text-red-500 italic md:text-sm">
              Please add a link e.g (must include https://)
            </div>
          )}
        </form>
      </div>

      <div className="pt-14 relative w-2/3 mx-auto right-0 left-0 ">
        {uniqueUrl.map((link) => (
          <ul key={link.shorten} className="mt-2 rounded-md h-fit bg-white">
            <li className="flex justify-between flex-col md:flex-row px-2 py-2">
              <div className="border-b-2 border-b-slate-300 py-2 md:py-0 md:border-none">
                <p>{link.link}</p>
              </div>
              <div className="flex space-x-2 space-y-3 md:space-y-0 flex-col md:flex-row">
                <p className="text-sky-400 ">{link.shorten}</p>
                <button
                  onClick={() => {
                    handleCopy(link.shorten);
                  }}
                  className={
                    isCopied === link.shorten
                      ? "text-white bg-black  rounded-md py-2 md:py-1 text-center px-2 text-sm w-[95%]   md:w-auto"
                      : "text-white bg-sky-400 rounded-md py-2 md:py-1 px-2  text-center text-sm w-[95%]  md:w-auto"
                  }
                >
                  {isCopied === link.shorten ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>

      <div className="pt-32 w-3/4 mx-auto text-center">
        <h2 className="font-extrabold text-2xl xl:text-4xl">
          Advanced Statistics
        </h2>
        <p className="mt-4 text-slate-600 md:w-2/3 mx-auto xl:w-1/2">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="md:flex md:px-10 xl:px-40">
        <div className="mt-20  p-4 text-center w-4/5 h-1/3 mx-auto bg-white rounded-lg xl:w-1/2">
          <div className="relative bg-purple-600 rounded-full  w-20 h-20 mx-auto -top-14 md:right-11 xl:right-24">
            <Image
              src={BrandRecongition}
              alt="brand recogniton"
              width={100}
              height={5}
              className="absolute p-4 "
            />
          </div>
          <h2 className="font-extrabold text-md -mt-10 xl:text-left xl:px-4 xl:text-xl">
            Brand Recognition
          </h2>
          <p className="px-4 mt-4 text-sm xl:text-md xl:text-slate-400 xl:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>

        <div className="text-sky-400 text-6xl text-center md:hidden -mt-1">
          |
        </div>
        <div className="text-sky-400 text-7xl mx-[-3px] hidden md:flex -mt-1 md:mt-40">
          -
        </div>

        <div className="mt-10  p-4 text-center w-4/5 h-1/3 mx-auto bg-white rounded-lg md:mt-36 xl:w-1/2">
          <div className="relative bg-purple-600 rounded-full  w-20 h-20 mx-auto -top-14 md:right-11  xl:right-24 ">
            <Image
              src={DetailedRecord}
              alt="detailed records"
              width={100}
              height={5}
              className="absolute p-4 "
            />
          </div>
          <h2 className="font-extrabold text-md -mt-10 xl:text-left xl:px-4 xl:text-xl">
            Detailed Records
          </h2>
          <p className="px-4 mt-4 text-sm xl:text-md xl:text-slate-400 xl:text-left">
            Gain insights ito who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="text-sky-400 text-6xl text-center md:hidden -mt-1">
          |
        </div>
        <div className="text-sky-400 text-7xl mx-[-3px] hidden md:flex -mt-1 md:mt-48">
          -
        </div>

        <div className="mt-10 p-4 text-center w-4/5 h-1/3 mx-auto bg-white rounded-lg md:mt-48 xl:w-1/2 ">
          <div className="relative bg-purple-600 rounded-full  w-20 h-20 mx-auto -top-14 md:right-11 xl:right-24">
            <Image
              src={fullyCustom}
              alt="fully customizable"
              width={100}
              height={5}
              className="absolute p-4 "
            />
          </div>
          <h2 className="font-extrabold text-md -mt-10  xl:text-left xl:px-4 xl:text-xl ">
            Fully Customizable
          </h2>
          <p className="px-4 mt-4 text-sm xl:text-md xl:text-slate-400 xl:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
