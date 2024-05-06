import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const history = useHistory();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/auth/SignIn', formData); 
        history.push('/');
      } catch (error) {
        console.error('SignIn failed:', error);
       
      }
    };

  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;