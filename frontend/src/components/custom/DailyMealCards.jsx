import React from "react";
import MealCard from "src/components/custom/MealCard";
import image1 from "src/assets/images/image1.jpg";
import image2 from "src/assets/images/image2.jpeg";

export default function DailyMealCardsSection() {
  const meals = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 place-items-center w-max h-screen mx-auto">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="w-64 h-64 border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          <MealCard image={meal.image} />
        </div>
      ))}
    </div>
  );
}
