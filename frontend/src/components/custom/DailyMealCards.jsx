import React from "react";
import MealCard from "src/components/custom/MealCard";
import image1 from "src/assets/images/image1.jpg";
import image2 from "src/assets/images/image2.jpeg";
import image3 from "src/assets/images/image3.jpg";

export default function DailyMealCardsSection() {
  const meals = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-4 place-items-center w-max h-screen mx-auto">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="w-64 h-64 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out "
        >
          <MealCard image={meal.image} />
        </div>
      ))}
    </div>
  );
}
