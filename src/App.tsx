import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Typography from './styled-components/Typography';
import Form from './components/Form';
import Spinner from './styled-components/Spinner';

const GlobalStyle = createGlobalStyle`
`;

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background[0]};
  min-height: 100vh;
  overflow: auto;
  color: ${props => props.theme.colors.text};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Typography style={{ margin: 20 }} variant="h1">
          Overwatch
        </Typography>
        <Form />
      </Wrapper>
    </>
  );
}

export default App;
