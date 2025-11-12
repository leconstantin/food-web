"use client";
import { useState } from "react";
import { MealModal } from "../home/meal-modals";
import Button from "../ui/buttons";

export default function AddMeal() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddMeal = (data: unknown) => {
    console.log("Adding meal:", data);
    setIsAddModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsAddModalOpen(true)}>Add meal</Button>

      {/* Add Meal Modal */}
      <MealModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddMeal}
        type="add"
      />
    </>
  );
}
