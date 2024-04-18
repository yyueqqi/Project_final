import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/register'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const data_body = {
    email: email,
    pwd: pwd
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    window.location.href = '/main';
  
  try {
    const response = await axios.post(apiUrl, data_body);
    console.log(response.data); 
  
  } catch (error) {
    console.error('Error:', error);
    
  }
  }

  return (
    <>
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>    
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <label>Password</label>
        <input
          type="password"
          id="pwd"
          name="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <br/>
        <input type="submit" value="Submit" />
        <br/>
        <a href='/signup'>Signup</a>
      </form>
    </>
  );
};

export default Register;
