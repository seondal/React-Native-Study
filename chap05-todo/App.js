import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Todo List</Title>
      </Container>
    </ThemeProvider>
  );
}
