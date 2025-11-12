"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { MealFormData } from "@/lib/types";
import Button from "../ui/buttons";

// Zod schema for validation
const mealFormSchema = z.object({
  food_name: z.string().min(1, "Required field is empty"),
  food_rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  food_image: z.url("Invalid image URL"),
  restaurant_name: z.string().min(1, "Required field is empty"),
  restaurant_logo: z
    .url("Invalid logo URL")
    .startsWith("https", "Image URL must use HTTPS"),
  restaurant_status: z.boolean(),
});

type MealModalProps = {
  type: "add" | "edit";
  isOpen: boolean;
  onClose: () => void;
  initialData?: MealFormData;
  onSubmit: (data: MealFormData) => void;
};

export function MealModal({
  type,
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: MealModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MealFormData>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: initialData || {
      food_name: "",
      food_rating: 0,
      food_image: "",
      restaurant_name: "",
      restaurant_logo: "",
      restaurant_status: true,
    },
  });

  const onSubmitForm = async (data: MealFormData) => {
    try {
      await onSubmit(data);
      reset();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  if (!isOpen) return null;

  const isAddMode = type === "add";
  const title = isAddMode ? "Add a meal" : "Edit Meal";
  const submitButtonText = isAddMode ? "Add" : "Save";
  const submittingText = isAddMode ? "Adding Food..." : "Updating Food...";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="my-6 w-full max-w-lg rounded-lg bg-white px-8 py-4 shadow-lg">
        {/* Header */}
        <h2 className="mb-6 text-center font-semibold text-2xl text-brand">
          {title}
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitForm)}>
          {/* Food Name */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="food_name"
            >
              Food name
            </label>
            <input
              {...register("food_name")}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_name"
              placeholder="Enter food name"
              type="text"
            />
            {errors.food_name && (
              <p className="mt-1 text-red-500 text-xs" id="food_name-error">
                {errors.food_name.message}
              </p>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="food_rating"
            >
              Food rating
            </label>
            <input
              {...register("food_rating", { valueAsNumber: true })}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_rating"
              placeholder="Food rating (1-5)"
              step={0.1}
              type="number"
            />
            {errors.food_rating && (
              <p className="mt-1 text-red-500 text-xs" id="food_rating-error">
                {errors.food_rating.message}
              </p>
            )}
          </div>

          {/* Food Image URL */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="food_image"
            >
              Food image (link)
            </label>
            <input
              {...register("food_image")}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_image"
              placeholder="Food image (link)"
            />
            {errors.food_image && (
              <p className="mt-1 text-red-500 text-xs" id="food_image-error">
                {errors.food_image.message}
              </p>
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurant_name"
            >
              Restaurant name
            </label>
            <input
              {...register("restaurant_name")}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_name"
              placeholder="Restaurant name"
              type="text"
            />
            {errors.restaurant_name && (
              <p
                className="mt-1 text-red-500 text-xs"
                id="restaurant_name-error"
              >
                {errors.restaurant_name.message}
              </p>
            )}
          </div>

          {/* Restaurant Logo URL */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurant_logo"
            >
              Restaurant logo (link)
            </label>
            <input
              {...register("restaurant_logo")}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_logo"
              placeholder="Restaurant logo (link)"
            />
            {errors.restaurant_logo && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.restaurant_logo.message}
              </p>
            )}
          </div>

          {/* Restaurant Status */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurant_status"
            >
              Restaurant status (open/close)
            </label>
            <select
              {...register("restaurant_status", {
                setValueAs: (v) => v === "true",
              })}
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_status"
            >
              <option value="true">Open Now</option>
              <option value="false">Closed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1 py-2"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting && <Loader2Icon className="animate-spin" />}
              {isSubmitting ? submittingText : submitButtonText}
            </Button>
            <Button
              className="flex-1 py-2"
              disabled={isSubmitting}
              onClick={onClose}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
