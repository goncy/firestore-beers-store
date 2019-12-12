import React from "react";

import Loading from "./screens/Loading";
import api from "./resources";

const BeerContext = React.createContext();

const BeerProvider = ({ children }) => {
  const [beers, setBeers] = React.useState([]);
  const [status, setStatus] = React.useState("init");

  const state = { beers };
  const actions = {};

  React.useEffect(
    () =>
      api.onChange(beers => {
        setBeers(beers);

        setStatus("resolved");
      }),
    []
  );

  if (status === "init") return <Loading />;

  return <BeerContext.Provider value={{ state, actions }}>{children}</BeerContext.Provider>;
};

export { BeerContext as default, BeerProvider as Provider };
