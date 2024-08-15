// app/services/vehicleService.ts

const VEHICLE_TYPES_URL = process.env.NEXT_PUBLIC_VEHICLE_TYPES_URL;
const VEHICLE_MODELS_URL = process.env.NEXT_PUBLIC_VEHICLE_MODELS_URL;

export const fetchVehicleTypes = async () => {
  if (!VEHICLE_TYPES_URL) {
    throw new Error('Vehicle types URL is not defined in environment variables');
  }

  try {
    const response = await fetch(VEHICLE_TYPES_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Failed to fetch vehicle types:', error);
    return [];
  }
};

export const fetchVehicleModels = async (makeId: string, year: string) => {
  if (!VEHICLE_MODELS_URL) {
    throw new Error('Vehicle models URL is not defined in environment variables');
  }

  try {
    const url = VEHICLE_MODELS_URL.replace('{makeId}', makeId).replace('{year}', year);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    throw error;
  }
};
