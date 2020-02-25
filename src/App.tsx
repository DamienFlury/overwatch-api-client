import React from 'react';
import './App.css';
import styled from 'styled-components';
import Paper from './styled-components/Paper';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background[0]};
  min-height: 100vh;
  overflow: auto;
  color: white;
`;

function App() {
  return (
    <Wrapper>
      <h1>Overwatch</h1>
      <Paper>
        <h2>Hello world!</h2>
      </Paper>
    </Wrapper>
  );
}

export default App;
