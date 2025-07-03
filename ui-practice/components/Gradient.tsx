"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";


function Gradient() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm  ">
        <div className="bg-white dark:bg-zinc-900 rounded-[18px] p-2 sm:p-10">
         
          <p className="text-sm sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>

          <p className="text-xs mt-4 mb-4 text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full mt-6 mb-4 border border-blue-400 pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black  text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-green-400">
              $100
            </span>
          </button>
        </div>

        
      </BackgroundGradient>
    </div>
  );
}

export default Gradient;
