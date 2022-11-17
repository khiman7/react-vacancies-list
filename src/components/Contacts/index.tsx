import React, { HTMLAttributes } from 'react';
import { useQuery } from 'react-query';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import { getLocationData } from '../../services/geocoding.service';

import { ReactComponent as Location } from '../../assets/Location.svg';

interface IContactsProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
}

const Contacts: React.FC<IContactsProps> = ({
  name,
  phone,
  email,
  location,
}) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['address'],
    queryFn: () =>
      getLocationData({
        lat: location.lat,
        lng: location.lng,
        language: 'en',
      }),
  });
  const { isLoaded: isMapLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  return (
    <div className="w-full bg-[#2A3047] text-white rounded-xl z-10 relative overflow-hidden">
      <div className="pt-8 px-16">
        <div className="w-[273px] h-[273px] bg-[#202336] rounded-full absolute -top-5 -left-[16%] -z-10" />
        <p className="font-bold text-xl">
          Department name.
          <br />
          {name}
        </p>
        <p className="flex flex-row items-center mt-2">
          <Location className="-translate-y-1 mr-2" />
          <span>{isSuccess && data.results[0].formatted_address}</span>
        </p>
        <p className="mt-2">
          {phone} <br />
          {email}
        </p>
      </div>
      <div className="mt-4">
        {isMapLoaded && (
          <GoogleMap
            clickableIcons={false}
            mapContainerStyle={{ height: '250px', width: '100%' }}
            zoom={20}
            center={location}
            mapContainerClassName="map-container"
            options={{
              disableDefaultUI: true,
            }}
          >
            <MarkerF position={location} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default Contacts;
