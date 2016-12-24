import React from 'react';
import PlaceListCard from '../PlaceListCard';

const PlacesList = ({ loading, places, className }) => (
  <div className={className}>
    {loading ?
      'LOADING' :
      places.map((place, index) => <PlaceListCard key={`place-item-${index}`} place={place} />)
    }
  </div>
);

export default PlacesList;
