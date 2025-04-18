import React, { useState,useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form ,Row,Col} from 'react-bootstrap'
import {Link, redirect} from 'react-router-dom'

function RegisterScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log("submitted")
    }

  return (
    <FormContainer>
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
            <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            >

            </Form.Control>
      </Form.Group>


      <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>
            <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            >

            </Form.Control>
      </Form.Group>


      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
            <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            >

            </Form.Control>
      </Form.Group>

      <Form.Group controlId='passwordConfirm'>
        <Form.Label>Password</Form.Label>
            <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
            >

            </Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary'>
            Register
      </Button>

    </Form>

    <Row className='py-3'>
      <Col>
      Have an Account? <Link
        to={redirect ? '/login?redirect=${redirect}' : '/login'}>
          Sign In
        </Link>
      </Col>

    </Row>
    
    </FormContainer>
  )
}

export default RegisterScreen
