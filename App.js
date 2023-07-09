import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/pages/Dashboard';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import Login from './pages/Login';
const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      navigate('/dashboard');
    },
    onError: (error) => console.log('Login failed', error)
  });
  return (
    <>
  
    <Routes>
    <Route path='/' element={<Login onGoogleClick={login}/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
  
    </>
  );
}
export default App;