import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { LoginService } from '../../services/LoginService';

export const Login = ({ setToken }) =>
{
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    const token = await LoginService.submit(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="Email" name="email" ref={register({ required: `Email Required!` }) } onChange={e => setEmail(e.target.value)} />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: `Password Required!` }) } onChange={e => setPassword(e.target.value)} />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">Sign In</Button>
      </Form>
    </div>
  );
};

Login.PropTypes = {
  setToken: PropTypes.func.isRequired,
};
