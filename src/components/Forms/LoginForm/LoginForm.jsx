import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, AuthButton, LinkButton } from 'components';
import { FormFields, FormHeader, FormContainer } from 'UI/CommonStyles';
import { FormWrapper } from 'UI/CommonStyles/FormStyled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
// import { PopUpStateMenu } from 'components/PopUpStateMenu/PopUpStateMenu';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
});

export const LoginForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const { email, password } = values;

    dispatch(logIn({ email, password }));
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>{t('loginForm.formHeader')}</FormHeader>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={async values => {
            await handleSubmit(values);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <FormFields>
                <Input
                  name="email"
                  // label="Email Address"
                  label={t('loginForm.email')}
                  type="email"
                  placeholder={t('loginForm.placeholderEmail')}
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  name="password"
                  label={t('loginForm.password')}
                  type="password"
                  placeholder={t('loginForm.placeholderPassword')}
                  error={errors.password}
                  touched={touched.password}
                />
              </FormFields>
              <AuthButton type="submit" mt="32px">
                {t('loginForm.buttonLogIn')}
              </AuthButton>
            </Form>
          )}
        </Formik>
        {/* <PopUpStateMenu /> */}
      </FormWrapper>
      <LinkButton onClick={handleSignUpClick}>
        {t('loginForm.linkignUp')}
      </LinkButton>
    </FormContainer>
  );
};
