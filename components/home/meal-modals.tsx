"use client";

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
  const [formData, setFormData] = useState<MealFormData>(
    initialData || {
      name: "",
      rating: 0,
      avatar: "",
      restaurantName: "",
      logo: "",
      open: true,
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      let parsedValue: string | number | boolean = value;
      if (name === "rating") {
        parsedValue = Number(value);
      } else if (name === "open") {
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
    if (!formData.name.trim()) {
      newErrors.name = "Food name is required";
    }
    if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
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
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

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
              htmlFor="name"
            >
              Food name
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Enter food name"
              type="text"
              value={formData.name}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="rating"
            >
              Food rating
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="rating"
              max={5}
              min={1}
              name="rating"
              onChange={handleChange}
              placeholder="Enter rating (1-5)"
              step={0.1}
              type="number"
              value={formData.rating}
            />
          </div>

          {/* Food Image URL */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="avatar"
            >
              Food image (link)
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="avatar"
              name="avatar"
              onChange={handleChange}
              placeholder="Enter image URL"
              type="url"
              value={formData.avatar}
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
              id="restaurantName"
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
              htmlFor="logo"
            >
              Restaurant logo (link)
            </label>
            <input
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="logo"
              name="logo"
              onChange={handleChange}
              placeholder="Enter logo URL"
              type="url"
              value={formData.logo}
            />
          </div>

          {/* Restaurant Status */}
          <div>
            <label
              className="text-gray-400 text-xs uppercase tracking-wide"
              htmlFor="open"
            >
              Restaurant status (open/close)
            </label>
            <select
              className="mt-1 w-full rounded border-0 bg-gray-100 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              id="open"
              name="open"
              onChange={handleChange}
              value={String(formData.open)}
            >
              <option value="true">Open</option>
              <option value="false">Closed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 py-2" type="submit">
              {submitButtonText}
            </Button>
            <Button
              className="flex-1 py-2"
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
