import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import axios from 'axios';
import styled from 'styled-components';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = (props) => {
  let navigate = useNavigate();

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

   // Local functions
  const login = async () => {
    try {
      // Credentials
      let body = {
        email: userData.email,
        password: userData.password
      }

      let result = await axios.post(`${API_BASE_URL}users/login`, body);

      // The component will be reloaded as we change the credential hook
      if(result.data === 'Invalid user or password'){
        console.log(result.data);
        setInvalidError('Invalid user or password')
      } else {
        props.dispatch({type:LOGIN, payload: result.data});
        navigate('/');
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  // Render
  // {<pre>{JSON.stringify(userData, null,2)}</pre>}
  return(
    <StyledLogin>
      <StyledForm>
        <label>Email: </label>
        <StyledInput
          type='email'
          name='email'
          id='email'
          title='email'
          placeholder='Email'
          autoComplete='off'
          onChange={(e)=>{fillData(e)}}
        />
        <label>Password: </label>
        <StyledInput
          type='password'
          name='password'
          id='password'
          title='password'
          placeholder='Password'
          autoComplete='off'
          onChange={(e)=>{fillData(e); checkPassword(e)}}
        />
        <Error>{lengthError}</Error>
        <Error>{invalidError}</Error>
      </StyledForm>
      <LoginButton onClick={()=>login()}>
        Enter
      </LoginButton>
    </StyledLogin>
  );
};

const Error = styled.p`
  color: hsl(0, 44%, 33%);
  font-weight: bolder;
`;

const StyledLogin = styled.form`
  background-color: #758787;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  border-radius: 0.2em;
  font-size: 1.2rem;
  height: 2em;
  width: 14em;
  margin-bottom: 1.5em;
`;
const LoginButton = styled.div`
  width: 10em;
  height: 3em;
  color: white;
  cursor: pointer;

  transition: 0.3s;
  background-color: #282F2F;
  border-radius: 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.3s;
    background-color: hsl(180, 8%, 26%);
  }
`;

export default connect((state)=>({
  credentials: state.credentials
}))(Login);