import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/register'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const data_body = {
    email: email,
    name: name,
    pwd: pwd
}
  const handleSubmit = async(e) => {
    e.preventDefault();
  
  try {
    const response = await axios.post(apiUrl, data_body);
    console.log(response.data); 
  
  } catch (error) {
    console.error('Error:', error);
    
  }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
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
      </form>
    </>
  );
};

export default Login;
