import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { RegisterService } from '../../services/RegisterService';

export const Register = () =>
{

  const { errors, handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await RegisterService.submit(data);
  };
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" placeholder="First Name" name="firstName" ref={register({ required: `First Name Required!` }) } />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name="lastName" ref={register({ required: `Last Name Required!` }) } />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="Email" name="email" ref={register({ required: `Email Required!` }) } />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: `Password Required!` }) } />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};
