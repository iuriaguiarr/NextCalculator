import * as Component from "./styles";
import { useState } from "react";

export default function index() {
  const [result, setResult] = useState("");
  return (
    <div>
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
