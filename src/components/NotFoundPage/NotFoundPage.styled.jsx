import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const GooseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstDigit = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: #3e85f3;
  position: relative;
  left: 30px;
  top: -10px;

  @media screen and (min-width: 767px) {
    font-size: 200px;
    left: 70px;
    top: -20px;
  }
`;

export const LostGoose = styled.picture`
  @media screen and (min-width: 1440px) {
    width: 368.5px;
  }
`;

export const LastDigit = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: #3e85f3;
  position: relative;
  left: -30px;
  top: -10px;

  @media screen and (min-width: 767px) {
    font-size: 200px;
    left: -70px;
    top: -20px;
  }
`;

export const LostText = styled.span`
  margin-top: -20px;
  width: 387px;
  height: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: rgba(17, 17, 17, 0.7);

  @media screen and (max-width: 767px) {
    width: 281px;
    height: 54px;
  }
`;

export const Button = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 16px 48px;
  height: 56px;
  border: 0;
  border-radius: 16px;
  color: #fff;
  background-color: #3e85f3;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #2b78ef;
  }

  @media screen and (max-width: 767px) {
    padding: 14px 32px;
    height: 46px;
    font-size: 14px;
  }
`;
