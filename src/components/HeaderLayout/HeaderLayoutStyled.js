import styled from 'styled-components';

export const Header = styled.header`
  /* outline: 2px solid green; */
  padding: 24px 20px;
  margin-bottom: 64px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-bottom: 0;
    padding: 46px 32px 32px;
  }
`;

export const HeaderPanel = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    /* justify-content: flex-end; */
  }
`;

export const PageTitle = styled.p`
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border-width: 0;
  background-color: #3e85f3;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  cursor: pointer;
  transition: box-shadow 0.3s;

  :hover {
    background: #2b78ef;
  }
`;

export const UserPanel = styled.div`
  display: flex;
  gap: 24px;
`;

export const FeedBackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 20px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: #2b78ef;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 12px 32px;
    font-size: 14px;
    line-height: 1.286;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 14px;
    align-items: center;
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  line-height: 1.29;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 1;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
  }
`;
export const UserPhoto = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border-width: 1.8px;
  border-color: #3e85f3;
  border-style: solid;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const IconsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 32px;
      height: 32px;
    }
  }
`;
export const Main = styled.main`
  padding: 0 20px 20px;
`;

export const MenuIconStyled = styled(IconsButton)`
  & > svg {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 34px;
      height: 34px;
    }
  }
`;
