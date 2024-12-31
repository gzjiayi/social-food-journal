import React from "react";

export default function DateHeader() {
  const today = new Date();
  // Format the current date as "weekday, month day" (e.g., "Monday, Dec 14")
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return <div className="text-center text-2xl">{formattedDate}</div>;
}
