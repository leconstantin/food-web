import Image from "next/image";
import iconLogo from "@/public/Frame 36.png";
import icon from "@/public/Mask Group.png";
import AddMeal from "./add-meal";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex min-h-16 w-full max-w-6xl items-center font-sans">
      <div className="container flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <Image alt="icon" height={16} src={icon} width={16} />
          <Image alt="icon" height={16} src={iconLogo} width={100} />
        </div>
        <AddMeal />
      </div>
    </header>
  );
}
