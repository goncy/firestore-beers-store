import React from "react";

import BeerContext from "./context";

export function useBeers() {
  const {
    state: { beers },
  } = React.useContext(BeerContext);

  return beers;
}

export function useBeersMap() {
  const {
    state: { beers },
  } = React.useContext(BeerContext);

  return beers.reduce((acc, beer) => ({ ...acc, [beer.id]: beer }), {});
}

export function useBeer(id) {
  const beersMap = useBeersMap();

  return beersMap[id];
}
