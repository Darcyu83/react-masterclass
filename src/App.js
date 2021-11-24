import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const rotationAnime = keyframes`
from{transform: rotate(0deg); border-radius : 0px}
to{transform : rotate(360deg) ; border-radius : 50px}
`;

const rotationAnime1 = keyframes`
0%{transform : rotate(0deg); border-radius : 0px}
50%{transform : rotate(360deg); border-radius : 50px}
100%{transform : rotate(0deg); border-radius : 0px}
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnime1} 3s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 100px;
    }
  }
`;

const BoxCnts = styled.span`
  font-size: 36px;
`;

const BoxWCnts = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${BoxCnts}:hover {
    font-size: 98px;
  }
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: ${(props) => props.bgColor};
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: skyblue;
`;

function App() {
  return (
    <Father as="header">
      {" as=header 를 적어줌으로 써 div tag -> header tag로 변경 "}
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato" />
      <Circle bgColor="lightgrey" />
      <hr></hr>
      <Btn as="a" href="/" bgColor="tomato">
        Login
      </Btn>
      <Btn bgColor="tomato">Login</Btn>
      <hr></hr>
      {`styled.input.attrs({required:true}) ==> setAttributes(required,true)`}
      <Input />
      <hr></hr>
      <div>
        <BoxWCnts bgColor="yellow">
          <BoxCnts>★</BoxCnts>
        </BoxWCnts>
      </div>
    </Father>
  );
}

export default App;
