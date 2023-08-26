import styled from 'styled-components';

export const Header = styled.header`
  outline: 2px solid green;
  padding: 24px 20px;
  margin-bottom: 64px;
  display: flex;
  justify-content: flex-end;
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

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  & p {
    font-weight: 700;
    line-height: 1.29;
  }
  & div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-width: 1.8px;
    border-color: #3e85f3;
    border-style: solid;
  }
`;

export const IconsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Main = styled.main`
  padding: 0 20px 20px;
`;
