import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid white;
  border-top: 5px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
`;

const Spinner: React.FC = () => (
  <StyledSpinner
    animate={{ rotate: [0, 360] }}
    transition={{ loop: Infinity, duration: 2 }}
  />
);

export default Spinner;
