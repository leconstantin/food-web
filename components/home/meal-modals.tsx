"use client";

import { Loader2Icon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { MealFormData } from "@/lib/types";
import Button from "../ui/buttons";

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
  const [isSubmittimg, setIsSubmittimg] = useState(false);
  const [formData, setFormData] = useState<MealFormData>(
    initialData || {
      food_name: "",
      food_rating: 0,
      food_image: "",
      restaurant_name: "",
      restaurant_logo: "",
      restaurant_status: true,
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      let parsedValue: string | number | boolean = value;
      if (name === "food_rating") {
        parsedValue = Number(value);
      } else if (name === "Open Now") {
        parsedValue = value === "true";
      }
      return {
        ...prev,
        [name]: parsedValue,
      };
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.food_name.trim()) {
      newErrors.food_name = "Required field is empty";
    }
    if (formData.food_rating < 0 || formData.food_rating > 5) {
      newErrors.food_rating = "Rating is outside 1-5 range";
    }
    if (!formData.restaurant_logo.startsWith("https")) {
      newErrors.restaurant_logo = "Image URL is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmittimg(true);
    try {
      e.preventDefault();
      if (validateForm()) {
        onSubmit(formData);
        setFormData({
          food_name: "",
          food_rating: 0,
          food_image: "",
          restaurant_name: "",
          restaurant_logo: "",
          restaurant_status: true,
        });
      }
    } catch (error) {
      console.log(error);
      setIsSubmittimg(false);
    } finally {
      setIsSubmittimg(false);
    }
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Food Name */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="food_name"
            >
              Food name
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_name"
              name="food_name"
              onChange={handleChange}
              placeholder="Enter food name"
              required
              type="text"
              value={formData.food_name}
            />
            {errors.name && (
              <p
                className="mt-1 text-red-500 text-xs"
                id="restaurant_name-error"
              >
                {errors.name}
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
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_rating"
              max={5}
              min={1}
              name="food_rating"
              onChange={handleChange}
              placeholder="Food rating (1-5)"
              required
              step={0.1}
              type="number"
              value={formData.food_rating}
            />
            {errors.food_rating && (
              <p
                className="mt-1 text-red-500 text-xs"
                id="restaurant_rating-error"
              >
                {errors.food_rating}
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
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="food_image"
              name="food_image"
              onChange={handleChange}
              placeholder="Food image (link)"
              required
              type="url"
              value={formData.food_image}
            />
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
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_name"
              name="restaurant_name"
              onChange={handleChange}
              placeholder="Restaurant name"
              required
              type="text"
              value={formData.restaurant_name}
            />
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
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_logo"
              name="restaurant_logo"
              onChange={handleChange}
              placeholder="Restaurant logo (link)"
              required
              type="url"
              value={formData.restaurant_logo}
            />
            {errors.restaurant_logo && (
              <p
                className="mt-1 text-red-500 text-xs"
                id="restaurant_image-error"
              >
                {errors.restaurant_logo}
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
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="restaurant_status"
              name="restaurant_status"
              onChange={handleChange}
              value={String(formData.restaurant_status)}
            >
              <option defaultChecked value="true">
                Open Now
              </option>
              <option value="false">Closed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1 py-2"
              disabled={isSubmittimg}
              type="submit"
            >
              {isSubmittimg && <Loader2Icon className="animate-spin" />}
              {isSubmittimg ? submittingText : submitButtonText}
            </Button>
            <Button
              className="flex-1 py-2"
              disabled={isSubmittimg}
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
