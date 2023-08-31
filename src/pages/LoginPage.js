import { Container } from 'components';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section style={{ background: '#dcebf7' }}>
      <Container outline fullscreen>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
