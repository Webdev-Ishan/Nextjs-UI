import React from "react";

function HeroSection() {
  return (
    <div
      className="h-screen md:h-[40rem] w-full rounded-md flex flex-col  justify-center items-center
     overflow-hidden mx-auto py-2 gap-6
    "
    >
      <div className="w-full text-center px-12 ">
        <h1 className="text-6xl font-bold text-white">
          Master The Code Reviews
        </h1>
        <p className="mt-12 font-light  text-center mr-6 ml-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iusto
          voluptatum doloremque error! Cupiditate, mollitia eos maiores labore,
          accusantium et, est molestiae facilis saepe id exercitationem deleniti
          quae itaque enim illum doloribus commodi?
          <br />
          Dolorum non voluptate labore corporis cum esse omnis veniam adipisci
          hic ullam, laboriosam, nemo perferendis sint? Tempore quidem illum,
          dolore error tempora quas animi laborum, itaque cum pariatur
          assumenda! Beatae, dicta illum!
          <br />
          Exercitationem omnis eveniet dignissimos unde asperiores assumenda et
          blanditiis nam deleniti quod nulla, iste consequuntur minus
          cupiditate, nobis, veritatis vel aliquid. Et eum ipsum ab libero ipsa
          architecto laudantium eaque mollitia. Expedita maxime mollitia
          voluptas?
        </p>
      </div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex hover:text-green-400 duration-300 h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </button>
    </div>
  );
}

export default HeroSection;
