import React from 'react';
import PropTypes from 'prop-types';
import { House } from 'lucide-react';

const Navbar = ({ className }) => {
  return (
    <div className={`${className} flex justify-between text-2xl`}>
      <button>
        <a href="/">Nomories</a>
      </button>
      <div className="flex gap-12">
        <button>
          <a href="/">Gallery</a>
        </button>
        <button>
          <a href="/">Profile</a>
        </button>
        <button>
          <House />
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
