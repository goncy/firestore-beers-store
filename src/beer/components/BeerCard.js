import React from "react";
import styled from "styled-components";

import Currency from "../../ui/format/Currency";
import Button from "../../ui/controls/Button";
import { useCartItemCount, useCartActions } from "../../cart/hooks";
import { useBeer } from "../../beer/hooks";

const Container = styled.div`
  padding: 24px;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 18px;
`;

const CartCount = styled.small`
  text-align: center;
  margin-top: 6px;
  opacity: 0.5;
`;

const BeerCard = ({ id }) => {
  const { name, price } = useBeer(id);
  const { add } = useCartActions();
  const count = useCartItemCount(id);

  return (
    <Container>
      <Description>
        <b>{name}</b>
        <Currency>{price}</Currency>
      </Description>
      <Button onClick={() => add(id)}>Agregar al carrito</Button>
      {Boolean(count) && <CartCount>Tenés {count} en el carrito</CartCount>}
    </Container>
  );
};

export default BeerCard;
