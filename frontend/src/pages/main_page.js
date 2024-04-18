import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = async(e) => {
    e.preventDefault();
  
  try {
    
    console.log('response.data'); 
  
  } catch (error) {
    console.error('Error:', error);
    
  }
  }
  return (
    <>
        <h1>main_page</h1>
        <form onSubmit={handleSubmit}>
            <label>Upload</label>
            <input type='file' id="file" name="file"></input>
            <br/>
            <br/>
            <input type="submit"></input>
        </form>
    </>
  )
}

export default Main