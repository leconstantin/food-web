import Image from "next/image";
import iconLogo from "@/public/Frame 36.png";
import icon from "@/public/Mask Group.png";

export default function SiteHeader() {
  return (
    <header className="mx-auto min-h-16 w-full max-w-6xl py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image alt="icon" height={16} src={icon} width={16} />
          <Image alt="icon" height={16} src={iconLogo} width={100} />
        </div>
        <button
          className="rounded-[14px] bg-[#FF9A0E] px-6 py-3 text-white"
          type="button"
        >
          Add meal
        </button>
      </div>
    </header>
  );
}
