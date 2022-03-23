import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Register() {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({ 
    name: '',
    username: '', 
    email: '',
    password: '', 
    gender: '',
    birthdate: '', 
    city: '' 
  });
  const [lengthError, setLengthError] = useState('');
  const [invalidError, setInvalidError] = useState('');
  const [success, setSuccess] = useState('');

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
  const register = async () => {
    try {
      // Credentials
      let body = {
        name: userData.name,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        gender: userData.gender,
        birthdate: userData.birthdate,
        city: userData.city,
      }

      let result = await axios.post('http://localhost:5000/users/', body);

      // The component will be reloaded as we change the credential hook
      if(result.data === 'Invalid user or password'){
        setInvalidError('Invalid user or password')
      } else {
        setTimeout(()=>{
          navigate('/login');
        },3000);
        setSuccess(`Wellcome ${userData.name}! Login and enjoy your favourite movies.`);
      }
    }
    catch (error) {
      setInvalidError('Invalid data')
    }
  };

   return (
    <StyledRegister>
      <StyledForm>
        <label>Name: </label>
        <StyledInput
            type='text'
            name='name'
            id='nameregister'
            title='name'
            placeholder='Name'
            autoComplete='off'
            onChange={(e)=>{fillData(e)}}
          />
        <label>Username: </label>
        <StyledInput
            type='text'
            name='username'
            id='username'
            title='username'
            placeholder='username'
            autoComplete='off'
            onChange={(e)=>{fillData(e)}}
          />
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
          <StyledDataLabel>Genre:</StyledDataLabel><br/>
          <StyledFieldSet>
            <StyledInputRadio
            type="radio" id="male" name="genre" value="male" />
            <label>Male</label><br/>
            <StyledInputRadio
            type="radio" id="female" name="genre" value="female" />
            <label>Female</label>
          </StyledFieldSet>
          <StyledDataLabel>Birthdate:</StyledDataLabel><br/>
          <StyledInput
            type='date'
            name='birthdate'
            id='birthdate'
            title='birthdate'
            autoComplete='off'
            onChange={(e)=>{fillData(e); checkPassword(e)}}
          />
          <Success>{success}</Success>
          <RegisterButton onClick={()=>{register()}}>Register</RegisterButton>
      </StyledForm>
    </StyledRegister>
  )
};

const Success = styled.h3`
  color: hsl(112, 44%, 25%);
  font-size: 1.5rem;
`;

const StyledDataLabel = styled.label`
  margin-top: 1em;
`;

const StyledRegister = styled.div`
  background-color: hsl(180, 7%, 49%);
  width: 100%;
  height: 100vh;
`;

const Error = styled.p`
  color: hsl(0, 44%, 33%);
  font-weight: bolder;
  margin: 0;
`;

const StyledForm = styled.form`
  margin-top: 2em;
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
const StyledFieldSet = styled.fieldset`
  border-radius: 0.2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledInputRadio = styled.input`
  border-radius: 0.2em;
  font-size: 0.6rem;
  height: 2em;
  width: 3.7em;
  margin-bottom: 1.5em;
`;
const RegisterButton = styled.div`
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

export default Register;