import React from 'react';
import PlaceListCard from '../PlaceListCard';
import PlaceListSearch from '../PlaceListSearch';

const PlacesList = ({ loading, places, className }) => (
  <div className={className}>
    <PlaceListSearch />
    {loading ?
      'LOADING' :
      places.map((place, index) => <PlaceListCard key={`place-item-${index}`} place={place} />)
    }
  </div>
);

export default PlacesList;
