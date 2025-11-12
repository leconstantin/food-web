"use client";

import type React from "react";

import { useState } from "react";
import Button from "../ui/buttons";

type MealModalProps = {
  type: "add" | "edit";
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    foodName: string;
    foodRating: number;
    foodImage: string;
    restaurantName: string;
    restaurantLogo: string;
    restaurantStatus: string;
  };
  onSubmit: (data: unknown) => void;
};

export function MealModal({
  type,
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: MealModalProps) {
  const [formData, setFormData] = useState(
    initialData || {
      foodName: "",
      foodRating: 0,
      foodImage: "",
      restaurantName: "",
      restaurantLogo: "",
      restaurantStatus: "open",
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.foodName.trim()) {
      newErrors.foodName = "Food name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  const isAddMode = type === "add";
  const title = isAddMode ? "Add a meal" : "Edit Meal";
  const submitButtonText = isAddMode ? "Add" : "Save";

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
              htmlFor="foodName"
            >
              Food name
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="foodName"
              onChange={handleChange}
              placeholder="Enter food name"
              type="text"
              value={formData.foodName}
            />
            {errors.foodName && (
              <p className="mt-1 text-red-500 text-xs">{errors.foodName}</p>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="foodRating"
            >
              Food rating
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="foodRating"
              onChange={handleChange}
              placeholder="Enter rating"
              type="number"
              value={formData.foodRating}
            />
          </div>

          {/* Food Image URL */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="foodImage"
            >
              Food image (link)
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="foodImage"
              onChange={handleChange}
              placeholder="Enter image URL"
              type="url"
              value={formData.foodImage}
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurantName"
            >
              Restaurant name
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="restaurantName"
              onChange={handleChange}
              placeholder="Enter restaurant name"
              type="text"
              value={formData.restaurantName}
            />
          </div>

          {/* Restaurant Logo URL */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurantLogo"
            >
              Restaurant logo (link)
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="restaurantLogo"
              onChange={handleChange}
              placeholder="Enter logo URL"
              type="url"
              value={formData.restaurantLogo}
            />
          </div>

          {/* Restaurant Status */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="restaurantStatus"
            >
              Restaurant status (open/close)
            </label>
            <select
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              name="restaurantStatus"
              onChange={handleChange}
              value={formData.restaurantStatus}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 py-2">{submitButtonText}</Button>
            <Button className="flex-1 py-2" onClick={onClose} variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
