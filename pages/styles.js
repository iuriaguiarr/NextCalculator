import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Particles from "react-particles-js";

// Interagindo diretamente com a tag body
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4ecdc4;
    overflow:hidden;
  }
  *{
    outline: none;
    border: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

export const TextBox = styled.div`
  text-align: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const TitleSmall = styled(Title)`
  font-size: 1rem;
`;

export const CalculatorBox = styled.div`
  width: calc((4rem + 0.4rem) * 4);
  background-color: transparent;
  border-radius: 0.8rem;
`;

export const CalculatorScreen = styled.input`
  padding: 1rem;
  width: calc(100% - 2rem);
  border-radius: 0.8rem;
  background-color: #effbfa;
  box-shadow: inset -0.3rem -0.3rem 0 rgba(0, 0, 0, 0.2);
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
`;

export const CalculatorButtonLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const CalculatorButton = styled.button`
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

export const CalculatorSignal = styled(CalculatorButton)`
  background-color: #313638;
  color: #fff;
  cursor: pointer;
  box-shadow: inset -0.3rem -0.3rem 0 rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: #1c1f21;
  }
`;

const params = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 0.5,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
};

export const ParticlesBackground = styled(Particles).attrs((props) => ({
  params: params,
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
