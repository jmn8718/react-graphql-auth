import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  & input {
    outline: none;
    width: 100%;
    height: 48px;
    padding: 16px;
    font-size: 1.5em;
    border: 1px solid grey;
  }
`;

const PlaceListSearch = () => (
  <Wrapper>
    <input type="text" />
  </Wrapper>
);

export default PlaceListSearch;
