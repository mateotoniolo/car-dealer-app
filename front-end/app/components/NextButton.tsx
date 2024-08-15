"use client"; 
import { useRouter } from 'next/navigation';

interface NextButtonProps {
  isEnabled: boolean;
  selectedVehicle: string;
  selectedYear: string;
}

const NextButton = ({ isEnabled, selectedVehicle, selectedYear }: NextButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (isEnabled) {
      router.push(`/result/${selectedVehicle}/${selectedYear}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isEnabled}
      className={`w-full p-2 mt-4 ${isEnabled ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} rounded`}
    >
      Next
    </button>
  );
};

export default NextButton;
