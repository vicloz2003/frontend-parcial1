import React, { useState,useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form ,Row,Col} from 'react-bootstrap'
import {Link, redirect} from 'react-router-dom'

function LoginScreen() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log("submitted")
    }

  return (
   <>
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='password'>
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      >

      </Form.Control>
      </Form.Group>

      <Form.Group controlId='password'></Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      >

      </Form.Control>
      <Form.Group controlId='password'></Form.Group>

      
       <h1>Sign In</h1>

      <Button type='submit' >
        Sign In
      </Button>
    </Form>
    <Row className='py-3'>
      <Col>
      New Custumer? <Link
        to={redirect ? '/register?redirect=${redirect}' : '/register'}>
          Register
        </Link>
      </Col>

    </Row>
    </>
     

        
       
        
    
   
      
    
  )
}

export default LoginScreen
