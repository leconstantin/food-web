import Image from "next/image";
import bagIcon from "@/public/bag.png";
import searchIcon2 from "@/public/fi-rr-search.png";
import icon from "@/public/Icon.png";
import searchIcon from "@/public/search.png";
import { GhostButton } from "../ui/buttons";
export function HeroCard() {
  return (
    <div className="relative z-10 mt-6 max-w-xl rounded-xl bg-white">
      {/* btns */}
      <div className="flex items-center gap-4 border-[#EEEEEE] border-b p-3">
        <GhostButton className="w-fit rounded-lg bg-[#F172281A] px-6 py-1 text-[#F17228]">
          <Image alt="icon" height={16} src={icon} width={16} />
          Delivery
        </GhostButton>
        <GhostButton className="w-fit rounded-lg px-6 py-1 font-normal text-[#757575]">
          <Image alt="icon" height={16} src={bagIcon} width={16} />
          Pickup
        </GhostButton>
      </div>
      {/* search */}
      <div className="flex flex-col gap-4 p-3 lg:flex-row lg:items-center">
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
