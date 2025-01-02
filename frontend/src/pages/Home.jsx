import React from 'react';
import Navbar from 'src/components/custom/Navbar';
import DateHeader from 'src/components/custom/DateHeader';
import DailyMealCardsSection from 'src/components/custom/DailyMealCards';
import FloatingAddButton from 'src/components/custom/FloatingAddButton';

const Home = () => {
  return (
    <>
      <div>
        <Navbar className="px-12 py-6" />
      </div>
      <div className="px-4 py-6">
        <DateHeader />
        <DailyMealCardsSection />
        <FloatingAddButton />
      </div>
    </>
  );
};

export default Home;
