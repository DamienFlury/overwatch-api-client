import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background[0]};
  min-height: 100vh;
  overflow: auto;
  color: white;
`;

function App() {
  return (
    <Wrapper>
      <div>Overwatch</div>
    </Wrapper>
  );
}

export default App;
