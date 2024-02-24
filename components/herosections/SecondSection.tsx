import Image from "next/image";

import mobileHero from "@/public/illustration-working.svg";

export default function SecondSection() {
  return (
    <div>
      <div className="md:flex md:flex-row-reverse md:px-10 md:mt-10 xl:px-40">
        <div className="mt-5">
          <Image
            alt="mobilehero"
            width={1200}
            height={90}
            src={mobileHero}
            className="w-screen pl-7 "
          />
        </div>

        <div className="text-center mt-10 w-4/5 mx-auto md:text-left">
          <h2 className="text-4xl font-extrabold xl:text-6xl">
            More than just shorter links
          </h2>
          <p className="mt-4">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-sky-400 text-white py-2 px-8 mt-5 font-sans text-lg rounded-3xl font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
