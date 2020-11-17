import styled from "styled-components";

const CalculatorButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-weight: bold;
  font-family: "Cabin";
  font-size: 1rem;
  background-color: #effbfa;
  border-radius: 0.8rem;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset -0.3rem -0.3rem 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #def7f5;
  }
`;

export default CalculatorButton;
