import React, { useState } from 'react';
import Navbar from 'src/components/custom/Navbar';
import DateHeader from 'src/components/custom/DateHeader';
import DailyMealCardsSection from 'src/components/custom/DailyMealCards';
import FloatingAddButton from 'src/components/custom/FloatingAddButton';
import LogMealDialog from 'src/components/custom/LogMealDialog';

const Home = () => {
  const [isLogMealDialogOpen, setIsLogMealDialogOpen] = useState(false);

  const handleFABClick = () => {
    setIsLogMealDialogOpen(true);
  };

  return (
    <>
      <div>
        <Navbar className="px-12 py-6" />
      </div>
      <div className="px-4 py-6">
        <DateHeader />
        <DailyMealCardsSection />
        <FloatingAddButton onClick={handleFABClick} />
        {isLogMealDialogOpen && (
          <LogMealDialog
            isOpen={isLogMealDialogOpen}
            // Pass the onClose function as a prop to give dialog ability to update the isLogMealDialogOpen state
            onClose={() => setIsLogMealDialogOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
