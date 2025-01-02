import React from 'react';
import PropTypes from 'prop-types';
import MealCard from 'src/components/custom/MealCard';
import image1 from 'src/assets/images/image1.jpg';
import image2 from 'src/assets/images/image2.jpeg';
import image3 from 'src/assets/images/image3.jpg';

const DailyMealCardsSection = () => {
  const meals = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  return (
    <div className="flex flex-col justify-start items-center mx-auto px-4 pt-6 pb-12 space-y-8">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="w-72 h-72 flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] transition-transform duration-500 "
        >
          <MealCard imageSrc={meal.image} />
        </div>
      ))}
    </div>
  );
};

DailyMealCardsSection.propTypes = {
  className: PropTypes.string,
};

export default DailyMealCardsSection;
