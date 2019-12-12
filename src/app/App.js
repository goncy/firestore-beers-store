import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import BeersScreen from "../beer/screens/Beers";
import CartScreen from "../cart/screens/Cart";
import { useCartCount } from "../cart/hooks";

import "./theme.css";

const Container = styled.div`
  background: whitesmoke;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Nav = styled.div`
  height: 65px;
  background-color: #333;
  color: whitesmoke;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
  overflow: auto;
`;

const Cart = styled(Link)``;

function App() {
  const count = useCartCount();

  return (
    <Container>
      <Nav>
        <Link to="/">Beers</Link>
        <Cart to="/cart">Hay {count} cervezas en el carrito</Cart>
      </Nav>
      <Content>
        <Switch>
          <Route exact component={BeersScreen} path="/beers" />
          <Route exact component={CartScreen} path="/cart" />
          <Redirect to="/beers" />
        </Switch>
      </Content>
    </Container>
  );
}

export default App;
