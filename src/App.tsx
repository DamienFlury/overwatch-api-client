import React from 'react';
import styled from 'styled-components';
import Paper from './styled-components/Paper';
import Form from './components/Form';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background[0]};
  min-height: 100vh;
  overflow: auto;
  color: ${props => props.theme.colors.text};
`;

function App() {
  return (
    <Wrapper>
      <h1>Overwatch</h1>
      <Form />
    </Wrapper>
  );
}

export default App;
