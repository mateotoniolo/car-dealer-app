import { useState, useEffect } from 'react';
import Dropdowns from './components/Dropdowns';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Car Dealer App</h1>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <Dropdowns />
      </div>
    </div>
  );
};

export default HomePage;
