import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, AuthButton, LinkButton } from 'components';
import { FormFields, FormHeader, FormContainer } from 'UI/CommonStyles';
import { FormWrapper } from 'UI/CommonStyles/FormStyled';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const registerSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
});

export const RegisterForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const { name, email, password } = values;
    const registerResult = await dispatch(register({ name, email, password }));
    console.log('registerResult', registerResult);
    // if registration is success, login
    if (register.fulfilled.match(registerResult)) {
      console.log('login');
      dispatch(logIn({ email, password }));
    }
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>{t('registerForm.formHeader')}</FormHeader>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={async values => {
            await handleSubmit(values);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <FormFields>
                <Input
                  name="name"
                  label={t('registerForm.name')}
                  type="text"
                  placeholder={t('registerForm.placeholderName')}
                  error={errors.name}
                  touched={touched.name}
                />
                <Input
                  name="email"
                  label={t('registerForm.emailAddress')}
                  type="email"
                  placeholder={t('registerForm.placeholderEmail')}
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  name="password"
                  label={t('registerForm.password')}
                  type="password"
                  placeholder={t('registerForm.placeholderPassword')}
                  error={errors.password}
                  touched={touched.password}
                />
              </FormFields>
              <AuthButton type="submit" mt="32px">
                {t('registerForm.buttonSignUp')}
              </AuthButton>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <LinkButton onClick={handleLogInClick}>
        {t('registerForm.linkLogIn')}
      </LinkButton>
    </FormContainer>
  );
};
