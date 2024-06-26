import React from 'react'
import './Changepassword.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Changepassword() {

    // call to local storage
    const userID = JSON.parse(localStorage.getItem('userID'));

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
      });     

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };      

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (formData.password !== formData.confirmPassword) {
          console.error('Passwords do not match');
          return;
        }
      
        try {
          const response = await axios.put(`http://localhost:5000/update_userss/${userID}`, {
            userName: formData.username,
            password: formData.password,
          });
          console.log(response.data);
          alert('Password updated successfully');
          window.location.reload();
      
        } catch (error) {
          console.error('Error updating user data:', error);
        }
      };
      

  return (
    <div className='tr'>
    <div className='changepassword'>
            <Form onSubmit={handleSubmit}>
                  <Link to="/Edit" style={{ marginLeft: '110%', marginBottom: '5px' }}>
                      <Button variant="dark" style={{color: "yellow"}}>Back</Button>
                  </Link>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Label style={{color: "yellow", fontSize: "25px"}}>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label style={{color: "yellow", fontSize: "25px"}}>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="confirmPassword">
                    <Form.Label style={{color: "yellow", fontSize: "25px"}}>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="dark" type="submit" style={{color: "yellow",width: "200px", marginTop: "10px", marginLeft: "45px", fontSize: "20px"}}>
                    Change Password
                </Button>
            </Form>
        </div>
        </div>
  )
}
