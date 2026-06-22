const getAllLocations = async () => {
  const response = await fetch('/api/locations')
  return response.json()
}

const LocationsAPI = { getAllLocations }
export default LocationsAPI
