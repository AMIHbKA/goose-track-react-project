import styled from 'styled-components';

export const LogoName = ({ children }) => {
  return <LogoNameStyled>{children}</LogoNameStyled>;
};

const LogoNameStyled = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    line-height: 1.5;
  }

  /* @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    font-size: 18px;
  } */
`;
