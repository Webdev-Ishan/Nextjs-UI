import React from "react";
//import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

 function Spotlights() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-transparent antialiased md:items-center md:justify-center">
     

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

    </div>
  );
}

export default Spotlights;