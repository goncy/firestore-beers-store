import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import Currency from "../../ui/format/Currency";
import Button from "../../ui/controls/Button";
import { useCartMap, useCartCount, useCartActions, useCartTotal } from "../hooks";

const Items = styled.ul`
  padding: 0;
  margin: 24px 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid gainsboro;
  border-radius: 4px;

  & + & {
    margin-top: 12px;
  }
`;

const CartScreen = () => {
  const cart = useCartMap();
  const count = useCartCount();
  const amount = useCartTotal();
  const { add, remove } = useCartActions();

  if (!count) return <span>Tu carrito esta vacio</span>;

  return (
    <>
      <b>Vas a llevarte:</b>
      <Items>
        {R.values(cart).map(({ ids, beer: { id, name, price } }) => (
          <Item key={id}>
            <span>
              {ids.length} {name} (<Currency>{price}</Currency> c/u)
            </span>
            <span>
              <Button size={1} onClick={() => remove(ids[0])}>
                -
              </Button>
              <Button size={1} onClick={() => add(id)}>
                +
              </Button>
            </span>
          </Item>
        ))}
      </Items>
      <b>
        Total: <Currency>{amount}</Currency>
      </b>
    </>
  );
};

export default CartScreen;
