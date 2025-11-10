"use client";
import { useState } from "react";
import { DeleteMealModal } from "../home/delete-modal";
import { MealModal } from "../home/meal-modals";
import Button from "../ui/buttons";

export default function AddMeal() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleAddMeal = (data: unknown) => {
    console.log("Adding meal:", data);
    setIsAddModalOpen(false);
  };

  const handleEditMeal = (data: unknown) => {
    console.log("Editing meal:", data);
    setIsEditModalOpen(false);
  };

  const editMealData = {
    foodName: "Bow Lasagna",
    foodRating: "4.6",
    foodImage: "https://res.cloudinary.com/dlemujhib/image/upload...",
    restaurantName: "Subway",
    restaurantLogo: "https://res.cloudinary.com/dlemujhib/image/upload...",
    restaurantStatus: "open",
  };
  return (
    <>
      <Button onClick={() => setIsAddModalOpen(true)}>Add meal</Button>
      <Button onClick={() => setIsEditModalOpen(true)}>Edit Meal</Button>
      <Button onClick={() => setIsDeleteModalOpen(true)}>Delete Meal</Button>

      {/* Add Meal Modal */}

      <MealModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddMeal}
        type="add"
      />
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
