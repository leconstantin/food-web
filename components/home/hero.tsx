import Image from "next/image";
import bagIcon from "@/public/bag.png";
import searchIcon2 from "@/public/fi-rr-search.png";
import icon from "@/public/Icon.png";
import plate from "@/public/Image Base.png";
import searchIcon from "@/public/search.png";

export default function Hero() {
  return (
    <section className="relative min-h-[628px] bg-[#FFB30E]">
      <div className="mx-auto max-w-6xl">
        {/* texts */}
        <div className="flex flex-col gap-1.5 text-white">
          <h1 className="font-bold text-[88px]">Are you starving?</h1>
          <p className="text-[22px]">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>
        {/* card */}
        <div className="mt-6 max-w-xl">
          <HeroCard />
        </div>
        <div className="absolute right-3 bottom-3">
          <Image alt="icon" src={plate} />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="rounded-xl bg-white">
      {/* btns */}
      <div className="flex items-center gap-4 border-[#EEEEEE] border-b p-6">
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#F172281A] px-6 py-2.5 text-[#F17228]"
          type="button"
        >
          <Image alt="icon" height={16} src={icon} width={16} />
          Delivery
        </button>
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg px-6 py-2.5 text-[#757575]"
          type="button"
        >
          <Image alt="icon" height={16} src={bagIcon} width={16} />
          Pickup
        </button>
      </div>
      {/* search */}
      <div className="flex items-center gap-4 p-6">
        <div className="flex min-h-12 flex-1 items-center gap-2 rounded-xl bg-[#F5F5F5] py-2 pr-2 pl-4">
          <Image
            alt="icon"
            className="flex flex-nowrap"
            height={16}
            src={searchIcon2}
            width={16}
          />
          <input
            className="flex flex-1 outline-0"
            placeholder="What would you like to eat today?"
            type="text"
          />
        </div>
        <button
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#F65900] px-6 py-2.5 text-white"
          type="button"
        >
          <Image alt="icon" height={16} src={searchIcon} width={16} />
          Find A Meal
        </button>
      </div>
    </div>
  );
}
