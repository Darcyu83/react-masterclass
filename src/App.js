import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
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
      {" "}
      as="header" 를 적어줌으로 써 div tag -> header tag로 변경
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
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
