import styled from "styled-components";
import { darkModeVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor}; ;
`;
const Container = styled.div``;

function Login() {
  return (
    <Container>
      <Title>login</Title>
      <button onClick={() => darkModeVar(true)}>to dark</button>
      <button onClick={() => darkModeVar(false)}>to light</button>
    </Container>
  );
}

export default Login;
