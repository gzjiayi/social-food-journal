import React from "react";
import Navbar from "src/components/custom/Navbar";
import DateHeader from "src/components/custom/DateHeader";
import DailyMealCardsSection from "src/components/custom/DailyMealCards";
import FloatingAddButton from "src/components/custom/FloatingAddButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <DateHeader />
      <DailyMealCardsSection />
      <FloatingAddButton />
    </>
  );
}
