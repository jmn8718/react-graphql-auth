import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import PlaceListCard from '../PlaceListCard';
import PlaceListSearch from '../PlaceListSearch';

const PlacesList = ({ loading, places, className, onHover, onHoverLeave }) => {

  return (
    <div className={className}>
      <PlaceListSearch />
      {loading ?
        <RefreshIndicator
          size={40}
          left={0}
          top={10}
          status="loading"
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center'
          }}
        /> :
        places.map((place, index) => <PlaceListCard key={`place-item-${index}`} place={place} onHover={onHover} onHoverLeave={onHoverLeave}/>)
      }
    </div>
  );
};

export default PlacesList;
