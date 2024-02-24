"use client";

import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function FirstSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between pt-5 px-5 md:px-10 xl:px-40">
        <div className="flex space-x-8 text-slate-600">
          <h2 className="text-2xl font-bold">Shortly</h2>
          <div className="space-x-6 flex mt-1">
            <p className="hidden md:flex">Features</p>
            <p className="hidden md:flex">Pricing</p>
            <p className="hidden md:flex">Resources</p>
          </div>
        </div>
        <div className="hidden md:flex text-slate-600 mt-1 space-x-4">
          <p>Login</p>
          <p className="bg-sky-400 text-white py-1 -mt-1 px-2 rounded-full ">
            Sign Up
          </p>
        </div>

        <div className="md:hidden">
          {!isOpen && (
            <HiBars3 onClick={() => setIsOpen(true)} className="w-9 h-9" />
          )}
          {isOpen && (
            <HiXMark onClick={() => setIsOpen(false)} className="w-9 h-9" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="fixed bg-purple-900 w-4/5 h-fit top-16 text-center rounded-lg right-5 font-bold p-4 text-white">
            <p className="mt-5">Features</p>
            <p className="mt-5">Pricing</p>
            <p className="mt-5">Resources</p>
            <p className="mt-8 border-t-2 border-t-slate-400 pt-4">Login</p>
            <p className="mt-4 bg-sky-300 rounded-full p-2 ">Sign Up</p>
          </div>
        </div>
      )}
    </div>
  );
}
