import Image from "next/image";
import iconLogo from "@/public/Frame 36.png";
import icon from "@/public/Mask Group.png";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex min-h-16 w-full max-w-5xl items-center font-sans">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <Image alt="icon" height={16} src={icon} width={16} />
          <Image alt="icon" height={16} src={iconLogo} width={100} />
        </div>
        <button
          className="rounded-lg bg-[#FF9A0E] px-4 py-1 font-medium text-sm text-white shadow-[0_20px_40px_rgba(255,174,0,0.29),0_5px_10px_rgba(255,174,0,0.26)]"
          type="button"
        >
          Add meal
        </button>
      </div>
    </header>
  );
}
