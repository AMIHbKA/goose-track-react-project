import { Container } from 'components';
import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <section style={{ background: '#dcebf7' }}>
      <Container outline fullscreen>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </Container>
    </section>
  );
};

export default RegisterPage;
