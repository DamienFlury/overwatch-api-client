import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  padding: 20px;
  box-shadow: ${props => props.theme.shadows[0]};
`;

const OptionBox = styled.div`
  padding: 10px;
`;

type Option = {
  key: string;
  value: string;
  image: string;
};

type Props = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  options: Option[];
};

const Select: React.FC<Props> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <MainBox onClick={() => setOpen(prev => !prev)}>
        {options.find(o => o.key === value)?.value}
      </MainBox>
      {open && (
        <>
          {options.map(o => (
            <OptionBox
              onClick={() => {
                onChange(o.key);
                setOpen(false);
              }}
            >
              {o.value}
            </OptionBox>
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Select;
