import { LogoName } from './LogoName';
import styled from 'styled-components';

export const LogoPanel = ({ logoImage, logoName }) => {
  return (
    <LogoPanelStyled>
      <div>
        <img src={logoImage} alt={logoName} />
      </div>
      <LogoName>{logoName}</LogoName>
    </LogoPanelStyled>
  );
};

const LogoPanelStyled = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    gap: 10px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 35px;

    & > img {
      max-width: 100%;
      height: auto;
    }

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 60px;
      height: 58px;
    }

    @media (min-width: ${props => props.theme.breakpoints.laptop}) {
      width: 71px;
      height: 68px;
    }
  }
`;
