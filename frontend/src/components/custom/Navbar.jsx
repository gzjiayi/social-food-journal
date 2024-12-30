import React from "react";
import { House } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between px-12 py-6 text-2xl">
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
