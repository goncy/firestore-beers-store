import React from "react";
import * as R from "ramda";

import CartContext from "./context";

export function useCart() {
  const {
    state: { cart },
  } = React.useContext(CartContext);

  return R.values(cart);
}

export function useCartMap() {
  const cart = useCart();

  return R.pipe(
    R.groupBy(R.path(["beer", "id"])),
    R.mapObjIndexed(items => ({ beer: R.path([0, "beer"], items), ids: R.pluck("id", items) }))
  )(cart);
}

export function useCartActions() {
  const { actions } = React.useContext(CartContext);

  return actions;
}

export function useCartCount() {
  const cart = useCart();

  return R.length(cart);
}

export function useCartItemCount(id) {
  const cart = useCart();

  return R.pipe(
    R.filter(R.pathEq(["beer", "id"], id)),
    R.length
  )(cart);
}

export function useCartTotal() {
  const cart = useCart();

  return R.pipe(
    R.map(R.path(["beer", "price"])),
    R.sum
  )(cart);
}
