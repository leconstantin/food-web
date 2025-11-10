import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import type { TMeal } from "@/lib/types";
import { cn } from "@/lib/utils";
import foodImg from "@/public/card/food-1.png";
import foodLogo from "@/public/card/logo.png";
import star from "@/public/card/star.png";
import tag from "@/public/card/tag.png";

export default function MealCard({ meal }: { meal: TMeal }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg bg-red-500">
        <Image
          alt="food image"
          className="rounded-lg object-cover"
          src={foodImg}
        />
        <Badge className="absolute top-3 left-3">$2.99</Badge>
      </div>
      <div className="flex gap-4">
        <div>
          <Image
            alt="food image"
            className="size-12 rounded-lg object-cover"
            src={foodLogo}
          />
        </div>
        <div>
          <p className="font-semibold">{meal.name}</p>
          <div className="flex items-center gap-1 text-[#FFB30E] text-sm">
            <Image
              alt="food image"
              className="size-4 object-cover"
              src={star}
            />
            4.6
          </div>
        </div>
        <div className="ml-auto flex">
          <EllipsisVerticalIcon className="size-4.5 text-black/80" />
        </div>
      </div>

      <div>
        <Button type="closed">{meal.}</Button>
        <Button type="open">Open</Button>
      </div>
    </div>
  );
}

function Badge({
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

function Button({
  className,
  children,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  type: "open" | "closed";
}) {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-2 rounded-lg bg-[#F17228] px-3 py-1 font-semibold text-sm text-white",
        type === "closed"
          ? "bg-[#F1722833] text-[#F17228]"
          : "bg-[#79B93C33] text-[#79B93C]",
        className
      )}
    >
      {children}
    </div>
  );
}
