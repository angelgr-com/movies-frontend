import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
const API_BASE_URL = process.env.API_KEY;

const Login = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState('');
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [lengthError, setLengthError] = useState('');
  const [invalidError, setInvalidError] = useState('');

  // Handler functions
  const fillData = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  };

  const checkPassword = (e) => {
    if (e.target.value.length < 4) {
      setLengthError('The password must be 4 characters long');
    }
    else {
      setLengthError('');
    }
  };

  // Redirect to home one second after user is logged in
  useEffect(()=>{
    if (credentials?.token !== undefined) {
      setTimeout(()=>{
        navigate('/');
      }, 3000);
    };
  });

  // Local functions
  const login = async () => {
    try {
      // Credentials
      let body = {
        email: userData.email,
        password: userData.password
      }

      let result = await axios.post('http://localhost:5000/users/login', body);
      console.log('click');
      console.log('result: ', result);

      // The component will be reloaded as we change the credential hook
      if(result.data === 'Invalid user or password'){
        setInvalidError('Invalid user or password')
      } else {
        setCredentials(result.data);
        console.log('result.data: ', result.data)
        console.log('credentials: ', credentials);
      }
    }
    catch (lengthError) {
      console.log(lengthError)
    }
  };

  const toRegister = () => {
    setTimeout(()=>{
      navigate('/register');
    }, 1000);
  }

  // Render
  if(credentials?.token !== undefined){
      return(
          <div>{credentials?.user?.name}, wellcome to AtomPlay.</div>
      )
  }
  else {
    return(
      <StyledLogin>
        {<pre>{JSON.stringify(userData, null,2)}</pre>}
        <StyledForm>
          <input
            type='email'
            name='email'
            id='email'
            title='email'
            placeholder='Email'
            autoComplete='off'
            onChange={(e)=>{fillData(e)}}
          />
          <input
            type='password'
            name='password'
            id='password'
            title='password'
            placeholder='Password'
            autoComplete='off'
            onChange={(e)=>{fillData(e); checkPassword(e)}}
          />
          {lengthError}
          {invalidError}
        </StyledForm>
        <LoginButton onClick={()=>login()}>
          Login
        </LoginButton>
        <LoginButton onClick={()=>toRegister()}>
          Register
        </LoginButton>
      </StyledLogin>
    );
  }
};

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.div`
  width: 9em;
  height: 3em;
  color: white;
  cursor: pointer;

  transition: 0.3s;
  background-color: green;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 4em;

  &:hover {
    transition: 0.3s;
    background-color: greenyellow;
  }
`;

export default Login;