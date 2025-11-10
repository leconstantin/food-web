import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import type { Meal } from "@/lib/types";
import { cn } from "@/lib/utils";
import star from "@/public/card/star.png";
import tag from "@/public/card/tag.png";

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg bg-gray-50">
        <Image
          alt={meal.food_name}
          className="rounded-lg object-cover"
          height={203}
          src={meal.food_image}
          width={244}
        />
        <Badge className="absolute top-3 left-3">$2.99</Badge>
      </div>
      <div className="flex gap-4">
        <div>
          <Image
            alt="food image"
            className="size-12 rounded-lg object-cover"
            height={48}
            src={meal.restaurant_image}
            width={48}
          />
        </div>
        <div>
          <p className="line-clamp-1 font-semibold text-sm">{meal.food_name}</p>
          <div className="flex items-center gap-1 text-[#FFB30E] text-sm">
            <Image
              alt="food image"
              className="size-4 object-cover"
              src={star}
            />
            {meal.food_rating}
          </div>
        </div>
        <div className="ml-auto flex">
          <EllipsisVerticalIcon className="size-4.5 text-black/80" />
        </div>
      </div>

      <div className="mt-auto flex">
        <Button type={meal.open ? "open" : "closed"}>
          {meal.open ? "Open" : "closed"}
        </Button>
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
