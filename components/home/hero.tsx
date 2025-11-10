import Image from "next/image";
import bagIcon from "@/public/bag.png";
import searchIcon2 from "@/public/fi-rr-search.png";
import icon from "@/public/Icon.png";
import plate from "@/public/Image Base.png";
import searchIcon from "@/public/search.png";

export default function Hero() {
  return (
    <section className="relative bg-[#FFB30E]">
      <div className="mx-auto flex min-h-[calc(100vh-220px)] max-w-5xl flex-col justify-center">
        {/* texts */}
        <div className="flex flex-col gap-1.5 text-white">
          <h1 className="font-bold text-6xl">Are you starving?</h1>
          <p className="text-sm">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>
        {/* card */}
        <div className="mt-6 max-w-xl">
          <HeroCard />
        </div>
        <div className="absolute right-40 bottom-0 rounded-full">
          <Image
            alt="icon"
            // className="shadow-2xl shadow-black"
            height={330}
            src={plate}
            width={330}
          />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="rounded-xl bg-white">
      {/* btns */}
      <div className="flex items-center gap-4 border-[#EEEEEE] border-b p-3">
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#F172281A] px-6 py-1 text-[#F17228]"
          type="button"
        >
          <Image alt="icon" height={16} src={icon} width={16} />
          Delivery
        </button>
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg px-6 py-1 text-[#757575]"
          type="button"
        >
          <Image alt="icon" height={16} src={bagIcon} width={16} />
          Pickup
        </button>
      </div>
      {/* search */}
      <div className="flex items-center gap-4 p-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#F5F5F5] py-2 pr-2 pl-4">
          <Image
            alt="icon"
            className="flex flex-nowrap"
            height={16}
            src={searchIcon2}
            width={16}
          />
          <input
            className="flex flex-1 outline-0 placeholder:text-sm"
            placeholder="What would you like to eat today?"
            type="text"
          />
        </div>
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-linear-to-r from-[#FF7A7A] to-[#F65900] px-6 py-2 text-white"
          type="button"
        >
          <Image alt="icon" height={16} src={searchIcon} width={16} />
          Find Meal
        </button>
      </div>
    </div>
  );
}
