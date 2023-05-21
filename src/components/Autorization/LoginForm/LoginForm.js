import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  FormTitle,
  Forms,
  Label,
  Input,
  IconButton,
  Button,
  Subtitle,
} from './LoginForm.styled';
import { BsEyeSlash } from 'react-icons/bs';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Forms autoComplete="on">
        <FormTitle>Login</FormTitle>
        <Label>
          <Input type="email" name="email" placeholder="Email" as={Input} />
          <ErrorMessage name="email" component="div" className="error" />
        </Label>

        <Label>
          <Input
            type={type}
            name="password"
            placeholder="Password"
            as={Input}
          />
          <IconButton type="button" onClick={() => setType('text')}>
            <BsEyeSlash
              style={{ fill: '#54adff', width: '24px', height: '24px' }}
            />
          </IconButton>
          <ErrorMessage name="password" component="div" className="error" />
        </Label>

        <Button type="submit">Login</Button>

        <Subtitle>
          Don't have an account?
          <NavLink
            to="/register"
            style={{ color: '#54ADFF', marginLeft: '4px' }}
          >
            Register
          </NavLink>
        </Subtitle>
      </Forms>
    </Formik>
  );
};

export default LoginForm;