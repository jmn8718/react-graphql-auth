import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const RatingWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: green;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceListCard = ({ place, onHover, onHoverLeave }) => (
  <Wrapper onMouseOver={() => onHover(place.get('id'))} onMouseLeave={() => onHoverLeave()}>
    <DataWrapper>
      <div>ID: {place.get('id')}</div>
      <div>NAME: {place.get('name')}</div>
      <div>Position: {place.get('lat')}, {place.get('lng')} </div>
    </DataWrapper>
    <RatingWrapper>{place.get('rating', 0)}</RatingWrapper>
  </Wrapper>
);

export default PlaceListCard;
