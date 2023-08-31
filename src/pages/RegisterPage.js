import { Container } from 'components';
import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <section style={{ background: '#dcebf7' }}>
      <Container outline fullscreen>
        <RegisterForm />
      </Container>
    </section>
  );
};

export default RegisterPage;
