import * as Component from "./styles";
import { useState } from "react";
import Particles from "react-particles-js";

export default function index() {
  const [result, setResult] = useState("");
  return (
    <div>
      <Particles
        params={{
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
        }}
      />
      <Component.GlobalStyle />
      <Component.Main>
        <Component.TextBox>
          <Component.Title>Seja Bem-Vindo ao NextCalculator!</Component.Title>
          <Component.TitleSmall>
            Uma calculadora feita totalmente em Javascript, utilizando React e
            NextJS
          </Component.TitleSmall>
        </Component.TextBox>
        <Component.CalculatorBox>
          <Component.CalculatorScreen value={result} readOnly />
          <Component.CalculatorButtonLine>
            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "(");
              }}
            >
              (
            </Component.CalculatorSignal>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + ")");
              }}
            >
              )
            </Component.CalculatorSignal>

            <Component.CalculatorSignal> CE </Component.CalculatorSignal>

            <Component.CalculatorSignal onClick={(e) => setResult("")}>
              C
            </Component.CalculatorSignal>
          </Component.CalculatorButtonLine>
          <Component.CalculatorButtonLine>
            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "7");
              }}
            >
              7
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "8");
              }}
            >
              8
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "9");
              }}
            >
              9
            </Component.CalculatorButton>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "÷");
              }}
            >
              ÷
            </Component.CalculatorSignal>
          </Component.CalculatorButtonLine>
          <Component.CalculatorButtonLine>
            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "4");
              }}
            >
              4
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "5");
              }}
            >
              5
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "6");
              }}
            >
              6
            </Component.CalculatorButton>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "x");
              }}
            >
              x
            </Component.CalculatorSignal>
          </Component.CalculatorButtonLine>
          <Component.CalculatorButtonLine>
            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "1");
              }}
            >
              1
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "2");
              }}
            >
              2
            </Component.CalculatorButton>

            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "3");
              }}
            >
              3
            </Component.CalculatorButton>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "-");
              }}
            >
              -
            </Component.CalculatorSignal>
          </Component.CalculatorButtonLine>
          <Component.CalculatorButtonLine>
            <Component.CalculatorButton
              onClick={(e) => {
                setResult(result + "0");
              }}
            >
              0
            </Component.CalculatorButton>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + ".");
              }}
            >
              .
            </Component.CalculatorSignal>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "=");
              }}
            >
              =
            </Component.CalculatorSignal>

            <Component.CalculatorSignal
              onClick={(e) => {
                setResult(result + "+");
              }}
            >
              +
            </Component.CalculatorSignal>
          </Component.CalculatorButtonLine>
        </Component.CalculatorBox>
      </Component.Main>
    </div>
  );
}
