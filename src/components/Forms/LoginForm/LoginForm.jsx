import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, AuthButton, LinkButton } from 'components';
import { FormFields, FormHeader, FormContainer } from 'UI/CommonStyles';
import { FormWrapper } from 'UI/CommonStyles/FormStyled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
});

export const LoginForm = () => {
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
        <FormHeader>Log In</FormHeader>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <FormFields>
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter email"
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  error={errors.password}
                  touched={touched.password}
                />
              </FormFields>
              <AuthButton type="submit" mt="32px">
                Log In
              </AuthButton>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <LinkButton onClick={handleSignUpClick}>Sign Up</LinkButton>
    </FormContainer>
  );
};
