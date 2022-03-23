import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';
import styled from 'styled-components';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Profile = (props) => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: props.credentials.user.name,
    username: props.credentials.user.surname,
    email: props.credentials.user.email, 
    gender: props.credentials.user.gender,
    birthdate: props.credentials.user.birthdate, 
    city: props.credentials.user.city
  });

  const userInput = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
    console.log('props.credentials?.user.name', props.credentials?.user.name);
  }

  // Redirect to index if user is not logged in
  useEffect(()=>{
    if(props.credentials?.token === ""){
      navigate("/");
    }
  });

  const updateUser = async () => {
    // Prepare body and token before call the backend
    let body = {
      name: userData.name,
      username: userData.surname,
      email: userData.email, 
      gender: userData.gender,
      birthdate: userData.birthdate, 
      city: userData.city
    }
    let config = {
      headers: { Authorization: `Bearer ${props.credentials.token}`}
    }

    // Send user data to backend
    try {
      let res = await axios.put(
        `${API_BASE_URL}users/${props.credentials.user.username}`,
        body,
        config
      );
      if(res){
        props.dispatch({type: MODIFY_CREDENTIALS, payload: userData});
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <StyledProfile>
      <StyledForm>
        <label>Name: </label>
        <StyledInput
          type='text'
          name='name'
          id='name'
          title='name'
          placeholder={userData.name}
          autoComplete='off'
          onChange={(e)=>{userInput(e)}}
        />
        <label>Username: </label>
        <StyledInput
          type='text'
          name='username'
          id='username'
          title='username'
          value={props.credentials.user.username}
          autoComplete='off'
          onChange={(e)=>{userInput(e)}}
        />
        <label>Email: </label>
        <StyledInput
          type='email'
          name='email'
          id='email'
          title='email'
          value={props.credentials.user.email}
          autoComplete='off'
          onChange={(e)=>{userInput(e)}}
        />
        <label>Genre: </label>
        <StyledFieldSet>
          <StyledInputRadio
          type="radio" id="male" name="genre" value="male" />
          <label>Male</label><br/>
          <StyledInputRadio
          type="radio" id="female" name="genre" value="female" />
          <label>Female</label>
        </StyledFieldSet>
        <label>Birthdate: </label>
        <StyledInput
          type='date'
          name='birthdate'
          id='birthdate'
          title='birthdate'
          value={props.credentials.user.birthdate}
          autoComplete='off'
          onChange={(e)=>{userInput(e)}}
        />
        <label>City: </label>
        <StyledInput
          type='text'
          name='city'
          id='city'
          title='city'
          value={props.credentials.user.city}
          autoComplete='off'
          onChange={(e)=>{userInput(e)}}
        />
        <UpdateButton onClick={()=>updateUser()}>
          Update
        </UpdateButton>
      </StyledForm>
    </StyledProfile>
  )
};

const StyledProfile = styled.form`
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
const UpdateButton = styled.div`
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

export default connect((state) => ({
  credentials: state.credentials
}))(Profile);