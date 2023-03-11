import axios from "axios";

const baseURL = 'https://api.data.gov.sg/v1/transport/'


export const fetchCameras = (date) => {
    return axios.get(baseURL + `traffic-images?date_time=${date}`)
      .then(res => {
        return res?.data?.items?.[0]?.cameras || [];
      })
      .catch(err => {
        throw new Error("Error fetching camera data.");
      });
  }