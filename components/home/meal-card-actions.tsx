"use client";
import { EllipsisVerticalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Meal, MealFormData } from "@/lib/types";
import { GhostButton } from "../ui/buttons";
import { DeleteMealModal } from "./delete-modal";
import { MealModal } from "./meal-modals";

export default function MealCardActions({ meal }: { meal: Meal }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    setIsPopoverOpen(false);
    setIsDeleteModalOpen(true);
  };
  const handleEditMeal = (data: unknown) => {
    console.log("Editing meal:", data);
    setIsEditModalOpen(false);
  };

  const editMealData: MealFormData = {
    food_name: meal.food_name,
    food_rating: meal.food_rating,
    food_image: meal.food_image,
    restaurant_name: meal.restaurant_name ?? "",
    restaurant_logo: meal.restaurant_image ?? "",
    restaurant_status: meal.open,
  };
  return (
    <>
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
          className="absolute right-4 bottom-0 z-10 min-w-36 cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          ref={popoverRef}
        >
          <GhostButton onClick={handleEdit}>Edit</GhostButton>
          <GhostButton
            className="text-red-600 hover:bg-red-50"
            onClick={handleDelete}
          >
            Delete
          </GhostButton>
        </div>
      )}

      {/* Edit Meal Modal */}
      <MealModal
        initialData={editMealData}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditMeal}
        type="edit"
      />
      <DeleteMealModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}
