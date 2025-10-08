const LocationsAPI = {
  getAllLocations: async () => {
    const res = await fetch('http://localhost:3000/api/locations');
    if (!res.ok) throw new Error('Failed to fetch locations');
    return res.json();
  }
};

export default LocationsAPI;
