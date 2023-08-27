import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm';
import styled from 'styled-components';
import { ChartIcon } from 'UI';

const Icon = styled(ChartIcon)`
  width: 50px;
  height: 50px;
  fill: ${props => props.theme.colors.mainText};

  &:hover {
    fill: ${props => props.theme.colors.primary};
  }
`;

const RegisterPage = () => {
  return (
    <>
      <Icon />
      <ChartIcon fill="blue" />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
