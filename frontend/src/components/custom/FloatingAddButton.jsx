import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'lucide-react';

const FloatingAddButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-md fixed bottom-4 right-4"
      onClick={onClick}
      aria-label="Log a new meal"
    >
      <Plus />
    </button>
  );
};

FloatingAddButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default FloatingAddButton;
