import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.colors.primary[0]};
  color: ${props => props.theme.colors.text};
  padding: 10px 20px;
  margin-left: 20px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  text-transform: uppercase;
  box-shadow: ${props => props.theme.shadows[0]};
  transition: box-shadow 0.2s;
  outline: none;
  font-family: 'Montserrat';
  &:active {
    box-shadow: ${props => props.theme.shadows[1]};
  }
`;

export default Button;
