import axios from 'axios';

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

const getLocationData = async ({
  lat,
  lng,
  language = 'en',
}: {
  lat: number;
  lng: number;
  language: string;
}) => {
  const { data } = await axios.get(API_URL, {
    params: {
      key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      latlng: `${lat},${lng}`,
      language,
    },
  });

  return data;
};

export { getLocationData };
