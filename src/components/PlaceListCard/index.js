import React from 'react';

const PlaceListCard = ({ place }) => (
  <div className="">
    <p>ID: {place.get('id')}</p>
    <p>NAME: {place.get('name')}</p>
  </div>
);

export default PlaceListCard;
