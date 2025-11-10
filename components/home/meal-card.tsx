import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import type { Meal } from "@/lib/types";
import { cn } from "@/lib/utils";
import star from "@/public/card/star.png";
import tag from "@/public/card/tag.png";

export default function MealCard({ meal }: { meal: Meal }) {
  const isValidSrc = (value: unknown): value is string =>
    typeof value === "string" && value.trim().length > 0;

  const foodImageSrc = isValidSrc(meal.food_image) ? meal.food_image : null;
  const restaurantName = meal.restaurant_name?.trim() || "Unknown restaurant";
  const restaurantInitial = restaurantName.charAt(0).toUpperCase();
  const restaurantImageSrc = isValidSrc(meal.restaurant_image)
    ? meal.restaurant_image
    : null;

  return (
    <div className="flex flex-col gap-4">
      {/* image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-50">
        {foodImageSrc ? (
          <Image
            alt={meal.food_name}
            className="min-h-[203px] rounded-lg object-cover"
            height={203}
            src={foodImageSrc}
            width={244}
          />
        ) : (
          <div className="flex min-h-[203px] items-center justify-center rounded-lg bg-gray-200 text-gray-600 text-sm">
            Image unavailable
          </div>
        )}
        <Badge className="absolute top-3 left-3">${meal.Price}</Badge>
      </div>
      {/* info */}
      <div className="mt-auto flex gap-4">
        <div>
          {restaurantImageSrc ? (
            <Image
              alt={`${restaurantName} logo`}
              className="size-12 rounded-lg object-cover"
              height={48}
              src={restaurantImageSrc}
              width={48}
            />
          ) : (
            <div className="flex size-12 items-center justify-center rounded-lg bg-gray-200 font-semibold text-base text-gray-600">
              {restaurantInitial}
            </div>
          )}
        </div>
        <div>
          <p className="line-clamp-1 font-semibold text-sm">{meal.food_name}</p>
          <p className="line-clamp-1 text-gray-500 text-xs">{restaurantName}</p>
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
      {/* open or closed btn */}
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
