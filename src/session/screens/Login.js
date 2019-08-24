import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LoginScreen = ({ login, status }) => (
  <Container>
    {status === "init" && <span>Trying to restore authentication...</span>}
    {status === "restored" && <button onClick={login}>Login with Google</button>}
  </Container>
);
export default LoginScreen;
