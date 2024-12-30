import React from "react";
import { Plus } from "lucide-react";

export default function FloatingAddButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-md fixed bottom-4 right-4"
      aria-label="Log a new meal"
    >
      <Plus />
    </button>
  );
}
