import React from "react";
import { House } from "lucide-react";

export default function Navbar({ className }) {
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
}
