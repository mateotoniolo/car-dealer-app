// app/services/vehicleService.ts

export const fetchVehicleTypes = async () => {
    try {
      const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
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
    try {
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
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
  