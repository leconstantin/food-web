"use client";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Meal } from "@/lib/types";
import { cn } from "@/lib/utils";
import star from "@/public/card/star.png";
import tag from "@/public/card/tag.png";
import { SecondaryButton } from "../ui/buttons";

export default function MealCard({ meal }: { meal: Meal }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const isValidSrc = (value: unknown): value is string =>
    typeof value === "string" && value.trim().length > 0;

  const foodImageSrc = isValidSrc(meal.food_image) ? meal.food_image : null;
  const restaurantName = meal.restaurant_name?.trim() || "Unknown restaurant";
  const restaurantInitial = restaurantName.charAt(0).toUpperCase();
  const restaurantImageSrc = isValidSrc(meal.restaurant_image)
    ? meal.restaurant_image
    : null;

  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleEdit = () => {
    setIsPopoverOpen(false);
  };

  const handleDelete = () => {
    setIsPopoverOpen(false);
  };
  return (
    <div className="relative flex flex-col gap-4">
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
          <button
            aria-label="Menu"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            ref={buttonRef}
            type="button"
          >
            <EllipsisVerticalIcon className="size-4.5 cursor-pointer text-black/80" />
          </button>
          {isPopoverOpen && (
            <div
              className="absolute right-4 bottom-0 z-10 min-w-36 cursor-pointer rounded-lg border border-gray-200 bg-white shadow-lg"
              ref={popoverRef}
            >
              <button
                className="w-full cursor-pointer px-4 py-2 text-left font-semibold text-black transition-colors hover:bg-orange-50"
                onClick={handleEdit}
                type="button"
              >
                Edit
              </button>
              <button
                className="w-full px-4 py-2 text-left font-semibold text-red-600 transition-colors hover:bg-red-50"
                onClick={handleDelete}
                type="button"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* open or closed btn */}
      <div className="mt-auto flex">
        <SecondaryButton type={meal.open ? "open" : "closed"}>
          {meal.open ? "Open" : "closed"}
        </SecondaryButton>
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
