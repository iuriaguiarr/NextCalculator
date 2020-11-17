import CalculatorBox from "../components/CalculatorBox";
import CalculatorButton from "../components/CalculatorButton";
import CalculatorButtonLine from "../components/CalculatorButtonLine";
import CalculatorScreen from "../components/CalculatorScreen";
import CalculatorSignal from "../components/CalculatorSignal";
import Main from "../components/Main";
import ParticlesBackground from "../components/ParticlesBackground";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import TitleSmall from "../components/TitleSmall";

import { useState } from "react";

export default function index() {
  const [result, setResult] = useState("");
  return (
    <div>
      <ParticlesBackground />
      <Main>
        <TextBox>
          <Title>Seja Bem-Vindo ao NextCalculator!</Title>
          <TitleSmall>
            Uma calculadora feita totalmente em Javascript, utilizando React e
            NextJS
          </TitleSmall>
        </TextBox>
        <CalculatorBox>
          <CalculatorScreen value={result} readOnly />
          <CalculatorButtonLine>
            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "(");
              }}
            >
              (
            </CalculatorSignal>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + ")");
              }}
            >
              )
            </CalculatorSignal>

            <CalculatorSignal> CE </CalculatorSignal>

            <CalculatorSignal onClick={(e) => setResult("")}>
              C
            </CalculatorSignal>
          </CalculatorButtonLine>
          <CalculatorButtonLine>
            <CalculatorButton
              onClick={(e) => {
                setResult(result + "7");
              }}
            >
              7
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "8");
              }}
            >
              8
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "9");
              }}
            >
              9
            </CalculatorButton>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "÷");
              }}
            >
              ÷
            </CalculatorSignal>
          </CalculatorButtonLine>
          <CalculatorButtonLine>
            <CalculatorButton
              onClick={(e) => {
                setResult(result + "4");
              }}
            >
              4
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "5");
              }}
            >
              5
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "6");
              }}
            >
              6
            </CalculatorButton>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "x");
              }}
            >
              x
            </CalculatorSignal>
          </CalculatorButtonLine>
          <CalculatorButtonLine>
            <CalculatorButton
              onClick={(e) => {
                setResult(result + "1");
              }}
            >
              1
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "2");
              }}
            >
              2
            </CalculatorButton>

            <CalculatorButton
              onClick={(e) => {
                setResult(result + "3");
              }}
            >
              3
            </CalculatorButton>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "-");
              }}
            >
              -
            </CalculatorSignal>
          </CalculatorButtonLine>
          <CalculatorButtonLine>
            <CalculatorButton
              onClick={(e) => {
                setResult(result + "0");
              }}
            >
              0
            </CalculatorButton>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + ".");
              }}
            >
              .
            </CalculatorSignal>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "=");
              }}
            >
              =
            </CalculatorSignal>

            <CalculatorSignal
              onClick={(e) => {
                setResult(result + "+");
              }}
            >
              +
            </CalculatorSignal>
          </CalculatorButtonLine>
        </CalculatorBox>
      </Main>
    </div>
  );
}
