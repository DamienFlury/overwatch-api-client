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

const Footer = styled.footer`
  color: rgba(255, 255, 255, 0.5);
  padding: 20px;
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
        <Footer>
          &copy; 2020. Overwatch &copy; 2020 Blizzard Entertainment.
        </Footer>
      </Wrapper>
    </>
  );
}

export default App;
