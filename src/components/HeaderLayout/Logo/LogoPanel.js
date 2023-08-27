import { LogoName } from './LogoName';
import LOGO from '../images/Goose_logo.png';
import styled from 'styled-components';

export const LogoPanel = () => {
  return (
    <LogoPanelStyled>
      <div>
        <img src={LOGO} alt="Goosse logo" />
      </div>
      <LogoName>GooseTrack</LogoName>
    </LogoPanelStyled>
  );
};

const LogoPanelStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 6px;
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
  }
`;
