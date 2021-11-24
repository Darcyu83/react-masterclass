import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 700px;
`;

const anime = keyframes`
from {
  color : tomato
}
to{
  color : teal
}`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 0px auto;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const H1GoHOme = styled.h1`
  color: blue;
`;

const Btn = styled.button.attrs({ disabled: true })`
  color: tomato;
  animation: ${anime} 1s infinite;

  margin: 0px auto;
  ${H1GoHOme}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="tomato"></Box>
      <Box bgColor="teal"></Box>
      <Circle bgColor="cyan"></Circle>
      <hr></hr>
      <Btn>Login</Btn>
      <Btn as="a">
        <H1GoHOme>Go Home</H1GoHOme>
      </Btn>
    </Wrapper>
  );
}

export default App;
