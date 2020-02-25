import styled from 'styled-components';

const Paper = styled.div`
  background: ${props => props.theme.colors.background[1]};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows[0]};
  padding: 20px;
  margin: 20px;
`;

export default Paper;
