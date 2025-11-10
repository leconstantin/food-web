import type { Meal } from "@/lib/types";
import MealCard from "./meal-card";

export default async function Featured() {
  const res = await fetch("https://6852821e0594059b23cdd834.mockapi.io/Food");
  const meals = await res.json();
  return (
    <div className="mx-auto max-w-5xl py-16">
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-bold text-3xl">Featured Meals</h3>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {meals.slice(0, 8).map((meal: Meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}
