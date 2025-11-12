import Image from "next/image";

import plate from "@/public/Image Base.png";
import { HeroCard } from "./hero-card";

export default function Hero() {
  return (
    <section className="relative bg-[#FFB30E]">
      <div className="container relative mx-auto flex min-h-[calc(100vh-220px)] max-w-5xl flex-col justify-center pt-16 lg:pt-0">
        {/* texts */}
        <div className="flex flex-col gap-1.5 text-white">
          <h1 className="font-bold text-3xl lg:text-6xl">Are you starving?</h1>
          <p className="text-sm">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>
        {/* card */}
        <HeroCard />
        <div className="right-40 bottom-0 z-0 mt-10 rounded-full lg:absolute lg:mt-0 xl:right-0 2xl:right-16">
          <Image alt="icon" height={330} src={plate} width={330} />
        </div>
      </div>
    </section>
  );
}
