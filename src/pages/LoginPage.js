import { Container } from 'components';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <section style={{ background: '#dcebf7' }}>
      <Container outline fullscreen>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
