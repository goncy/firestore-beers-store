import React from "react";
import * as R from "ramda";

import { useBeersMap } from "../beer/hooks";
import { useUser } from "../session/hooks";

import Loading from "./screens/Loading";
import api from "./resources";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [status, setStatus] = React.useState("init");
  const user = useUser();
  const beersMap = useBeersMap();

  function add(id) {
    api.add(user.uid, { beerId: id });
  }

  function remove(id) {
    api.remove(user.uid, id);
  }

  React.useEffect(
    () =>
      api.onChange(user.uid, cart => {
        setCart(cart);
        setStatus("resolved");
      }),
    [user.uid]
  );

  const state = {
    cart: R.pipe(
      R.map(({ id, beerId }) => ({ id, beer: R.prop(beerId, beersMap) })),
      R.reject(R.propSatisfies(R.isNil, "beer"))
    )(cart),
  };
  const actions = { add, remove };

  if (status === "init") return <Loading />;

  return <CartContext.Provider value={{ state, actions }}>{children}</CartContext.Provider>;
};

export { CartContext as default, CartProvider as Provider };
