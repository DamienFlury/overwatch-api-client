import styled from 'styled-components';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type Props = {
  variant?: Variant;
};

const translateVariantToFontSize = (variant?: Variant) => {
  switch (variant) {
    case 'h1':
      return '3rem';
    case 'h2':
      return '2.5rem';
    case 'h3':
      return '2rem';
    case 'h4':
      return '1.6rem';
    default:
      return '1rem';
  }
};

const Typography = styled.span<Props>`
  font-family: 'Montserrat';
  font-size: ${props => translateVariantToFontSize(props.variant)};
  display: block;
  margin: 5px 0;
`;

export default Typography;
