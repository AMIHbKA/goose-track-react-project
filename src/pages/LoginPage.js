import { Container } from 'components';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <section style={{ background: '#dcebf7', height: '100vh' }}>
      <Container full_center>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
