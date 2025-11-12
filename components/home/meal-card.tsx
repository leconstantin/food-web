"use client";
import Image from "next/image";
import type { Meal } from "@/lib/types";
import star from "@/public/card/star.png";
import { Badge } from "../ui/badge";
import { SecondaryButton } from "../ui/buttons";
import MealCardActions from "./meal-card-actions";

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
    <div className="relative flex flex-col gap-4">
      {/* image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-50">
        {foodImageSrc ? (
          <img
            alt={meal.food_name}
            className="h-[203px] rounded-lg object-cover"
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
          <MealCardActions meal={meal} />
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
