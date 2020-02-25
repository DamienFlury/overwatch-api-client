import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paper = styled(motion.div)`
  background: ${props => props.theme.colors.background[1]};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows[0]};
  padding: 20px;
  margin: 20px;
`;

export default Paper;
