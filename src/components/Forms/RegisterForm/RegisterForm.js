import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, AuthButton } from 'components';
import { FormFields, FormHeader, FormContainer } from 'UI/CommonStyles';

const registerSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
});

export const RegisterForm = () => {
  return (
    <FormContainer>
      <FormHeader>Sign Up</FormHeader>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
                maxw="450px"
                error={errors.name}
                touched={touched.name}
              />

              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter email"
                maxw="450px"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                maxw="450px"
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
    </FormContainer>
  );
};
