import { Container } from 'components';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <AuthSection>
      <Container full_center login>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </Container>
    </AuthSection>
  );
};

const AuthSection = styled.section`
  height: 100vh;
  background-color: #dcebf7;
`;

export default LoginPage;
