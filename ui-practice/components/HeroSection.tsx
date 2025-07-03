import React from "react";



function HeroSection() {
  return (
    <div
      className="h-auto md:h-[42rem] w-full rounded-md flex flex-col justify-center items-center overflow-hidden mx-auto py-4 px-4 md:px-16 gap-6"
    >
      <div className="w-full text-center px-4 md:px-12 mt-8 md:mt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Master The Code Reviews
        </h1>
      </div>

      <div className="w-full text-center px-4 md:px-12">
        <p className="mt-8 md:mt-12 font-light text-center mx-2 md:mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iusto
          voluptatum doloremque error! Cupiditate, mollitia eos maiores labore,
          accusantium et, est molestiae facilis saepe id exercitationem deleniti
          quae itaque enim illum doloribus commodi?
        </p>
      </div>

      <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex hover:text-green-400 duration-300 h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </button>
    </div>
  );
}



export default HeroSection;
