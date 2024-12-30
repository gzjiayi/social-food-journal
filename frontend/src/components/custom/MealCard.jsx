import React from "react";

export default function MealCard({ image }) {
  return (
    <div className="bg-blue-500 w-full h-full">
      <img
        src={image}
        alt="delicious meal"
        className="w-full h-full object-cover "
      />
    </div>
  );
}
