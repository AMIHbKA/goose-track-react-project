import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, AuthButton, LinkButton } from 'components';
import { FormFields, FormHeader, FormContainer } from 'UI/CommonStyles';
import { FormWrapper } from 'UI/CommonStyles/FormStyled';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import { useNavigate } from 'react-router';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const { name, email, password } = values;
    const registerResult = await dispatch(register({ name, email, password }));

    // if registration is success, login
    if (register.fulfilled.match(registerResult)) {
      dispatch(logIn({ email, password }));
    }
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>Sign Up</FormHeader>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);
              console.log('after dispatch');
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <FormFields>
                <Input
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  error={errors.name}
                  touched={touched.name}
                />

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
                Sign Up
              </AuthButton>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <LinkButton onClick={handleLogInClick}>Log In</LinkButton>
    </FormContainer>
  );
};
