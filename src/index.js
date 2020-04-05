import { render, h } from "preact";
import styled from "styled-components";

const Hero = styled.div`
  font-family: "Parisienne", cursive;
  background: #3a3a3a;
  height: calc(100vh - 16px);
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Quotes = styled.div`
  font-size: 35px;
  font-weight: 100;
  color: #fff05a;
  text-align: center;
`;

const Author = styled.div`
  font-family: "Arial";
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff05a;
  margin-top: 20px;
`;

function App() {
  return (
    <Hero>
      <Quotes>
        "There is nothing either good or bad, but thinking makes it so."
        <Author>Hamlet</Author>
      </Quotes>
    </Hero>
  );
}

render(<App />, document.getElementById("app"));
