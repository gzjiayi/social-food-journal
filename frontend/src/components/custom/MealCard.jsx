import React from 'react';
import PropTypes from 'prop-types';

export default function MealCard({ imageSrc }) {
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

MealCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
