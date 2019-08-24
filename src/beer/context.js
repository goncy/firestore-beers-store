import React from "react";

import { useUser } from "../session/hooks";

import Loading from "./screens/Loading";
import api from "./resources";

const BeerContext = React.createContext();

const BeerProvider = ({ children }) => {
  const [beers, setBeers] = React.useState([]);
  const [status, setStatus] = React.useState("init");
  const user = useUser();

  const state = { beers };
  const actions = {};

  React.useEffect(
    () =>
      api.onChange(user.uid, beers => {
        setBeers(beers);
        setStatus("resolved");
      }),
    [user.uid]
  );

  if (status === "init") return <Loading />;

  return <BeerContext.Provider value={{ state, actions }}>{children}</BeerContext.Provider>;
};

export { BeerContext as default, BeerProvider as Provider };
