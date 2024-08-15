'use client';

import { useState, useEffect } from 'react';
import { fetchVehicleTypes } from '../services/vehicleService';
import NextButton from './NextButton';

const Dropdowns = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 },
    (_, i) => currentYear - i,
  );

  useEffect(() => {
    const loadVehicleTypes = async () => {
      const types = await fetchVehicleTypes();
      setVehicleTypes(types);
    };

    loadVehicleTypes();
  }, []);

  return (
    <div>
      <label htmlFor="vehicleType" className="block mb-2">
        Vehicle Type:
      </label>
      <select
        id="vehicleType"
        value={selectedVehicle}
        onChange={(e) => setSelectedVehicle(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select a vehicle type</option>
        {vehicleTypes.map((type: any) => (
          <option key={type.MakeId} value={type.MakeId}>
            {type.MakeName}
          </option>
        ))}
      </select>

      <label htmlFor="modelYear" className="block mb-2">
        Model Year:
      </label>
      <select
        id="modelYear"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select a model year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <NextButton
        isEnabled={!!selectedVehicle && !!selectedYear}
        selectedVehicle={selectedVehicle}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default Dropdowns;
