import axios from 'axios';

export async function getLocationFromIP(ip: string) {
  try {
    // Use a free IP geolocation API (e.g., ip-api.com)
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = response.data;
    return {
      city: data.city || '',
      region: data.regionName || '',
      country: data.country || '',
      lat: data.lat || '',
      lon: data.lon || '',
      isp: data.isp || '',
    };
  } catch (error) {
    console.error('Error fetching location data:', error);
    return {
      city: '',
      region: '',
      country: '',
      lat: '',
      lon: '',
      isp: '',
    };
  }
}
