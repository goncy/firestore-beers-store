import React from "react";
import styled from "styled-components";

import BeerCard from "../components/BeerCard";
import { useBeers } from "../hooks";

const Beers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const BeersScreen = () => {
  const beers = useBeers();

  return (
    <Beers>
      {beers.map(({ id }) => (
        <BeerCard key={id} id={id} />
      ))}
    </Beers>
  );
};

export default BeersScreen;
