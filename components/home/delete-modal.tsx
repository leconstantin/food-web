"use client";

import type React from "react";
import { useEffect } from "react";
import Button from "../ui/buttons";

type MealModalProps = {
  isOpen: boolean;
  onClose: () => void;

  //   onSubmit: (data: unknown) => void;
};

export function DeleteMealModal({
  isOpen,
  onClose,
}: //   onSubmit,
MealModalProps) {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="my-6 w-full max-w-lg rounded-lg bg-white px-8 py-8 shadow-lg">
        {/* Header */}
        <h2 className="mb-6 text-center font-semibold text-2xl text-brand">
          Delete Meal
        </h2>

        {/* Form */}
        <div className="space-y-4">
          <p className="text-black/70 text-sm">
            Are you sure you want to delete this meal?Actions can not be
            reversed.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 py-2" onClick={handleSubmit}>
              yes
            </Button>
            <Button className="flex-1 py-2" onClick={onClose} variant="outline">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
