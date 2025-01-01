import React from "react";

export default function MealCard({ imageSrc, isActive }) {
  return (
    <div className="w-full h-full">
      <img
        src={imageSrc}
        alt="delicious meal"
        className="w-full h-full object-cover "
      />
    </div>
  );
}
