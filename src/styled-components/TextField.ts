import styled from 'styled-components';

const TextField = styled.input`
  background: none;
  border: none;
  color: ${props => props.theme.colors.inactive};
  box-shadow: inset 0 -1px 0 white;
  padding: 8px 0;
  outline: none;
  transition: 0.5s;

  &:focus {
    color: ${props => props.theme.colors.text};
    box-shadow: inset 0 -2px 0 white;
  }
`;

export default TextField;
