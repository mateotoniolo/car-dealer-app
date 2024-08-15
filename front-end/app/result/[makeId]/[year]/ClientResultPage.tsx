// app/result/[makeId]/[year]/ClientResultPage.tsx

'use client';

import { Suspense } from 'react';
import { fetchVehicleModels } from '../../../services/vehicleService';
import Spinner from '../../../components/Spinner'; // Asegúrate de tener un componente Spinner

interface VehicleModel {
  Model_Name: string;
  Model_ID: string;
}

// Componente que maneja la carga de datos
const VehicleModelsList = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const models = await fetchVehicleModels(makeId, year);
  return (
    <ul className="w-full max-w-4xl space-y-4">
      {models.map((model: VehicleModel) => (
        <li key={model.Model_ID} className="bg-white p-4 rounded shadow-md">
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};

const ClientResultPage = ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Vehicle Models for {makeId} in {year}
      </h1>
      <Suspense fallback={<Spinner />}>
        <VehicleModelsList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default ClientResultPage;
