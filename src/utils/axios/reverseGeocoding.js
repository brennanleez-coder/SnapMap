import axios from 'axios';
import { notify } from '../toast/errors';

const baseURL = "https://api.geoapify.com/v1/geocode/";
const apiKey = "389212c40a594f6898349bcf94633111"

export const reverseGeocoding = async (lat, lon) => {
  try {
    const response = await axios.get(`${baseURL}reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`);
    return response.data.features[0].properties.formatted;
  } catch (err) {
    notify("Error fetching location data.");
    return null;
  }
};
