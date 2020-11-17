import styled from "styled-components";

const CalculatorSignal = styled.button`
  width: 4rem;
  height: 4rem;
  font-weight: bold;
  font-family: "Cabin";
  font-size: 1rem;
  border-radius: 0.8rem;
  transition: 0.3s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313638;
  color: #fff;
  cursor: pointer;
  box-shadow: inset -0.3rem -0.3rem 0 rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: #1c1f21;
  }
`;

export default CalculatorSignal;
