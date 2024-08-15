// app/result/[makeId]/[year]/ClientResultPage.tsx

"use client"; 

import { useEffect, useState } from 'react';
import { fetchVehicleModels } from '../../../services/vehicleService';

interface VehicleModel {
  Model_Name: string;
  Model_ID: string;
}

const ClientResultPage = ({ makeId, year }: { makeId: string; year: string }) => {
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const fetchedModels = await fetchVehicleModels(makeId, year);
        setModels(fetchedModels);
        console.log(models)
      } catch (error) {
        setError('Failed to fetch vehicle models');
      }
    };

    loadModels();
  }, [makeId, models, year]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Vehicle Models for {makeId} in {year}
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="w-full max-w-4xl space-y-4">
        {models.map(model => (
          <li key={model.Model_ID} className="bg-white p-4 rounded shadow-md">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientResultPage;
