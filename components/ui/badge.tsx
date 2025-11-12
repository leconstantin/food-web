import Image from "next/image";
import { cn } from "@/lib/utils";
import tag from "@/public/card/tag.png";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-2 rounded-lg bg-[#F17228] px-3 py-1 font-semibold text-sm text-white",

        className
      )}
    >
      <Image alt="food image" className="size-4 object-cover" src={tag} />

      {children}
    </div>
  );
}
