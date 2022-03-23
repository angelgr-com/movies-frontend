import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import Button from '../Button/Button';

const Nav = (props) => { 
  let navigate = useNavigate();
  const [transparent, setTransparent] = useState(true);

  const toHome = (props) => {
    setTimeout(()=>{
        navigate('/');
    },500)
  }

  const toLogin = (props) => {
    setTimeout(()=>{
        navigate('/login');
    },500)
  }

  const toRegister = (props) => {
    setTimeout(()=>{
        navigate('/register');
    },500)
  }

  const toProfile = (props) => {
    setTimeout(()=>{
        navigate('/profile');
    },500)
  }

  const toOrders = (props) => {
    setTimeout(()=>{
        navigate('/orders');
    },500)
  }

  const transparentNav = () => {
    if (window.scrollY < 10) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }

  const logout = () => {
    props.dispatch({type:LOGOUT});
    navigate("/");
  }

  useEffect(() => {
    window.addEventListener('scroll', transparentNav);
    // removes the EventListener once is done
    return () => window.removeEventListener('scroll', transparentNav);
  }, []);

  // useEffect(()=>{
  //   console.log(props.credentials);
  // })
  
  if(!props.credentials?.token){
    return (
      <StyledNav transparent={transparent}>
        <Title onClick={()=>toHome()}>AtomPlay</Title>
        <ButtonsRow>
          <Button
            text='Login' 
            onClick={()=>toLogin()}
          />
          <Button
            text='Register'
            onClick={()=>toRegister()}
          />
        </ButtonsRow>
      </StyledNav>
    );
  }
  else {
    let name = props.credentials?.user
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return (
      <StyledNav transparent={transparent}>
      <Title onClick={()=>toHome()}>AtomPlay</Title>
      <ButtonsRow>
        <Button
          text={name} 
          onClick={()=>toProfile()}
        />
        <Button
          text='My Movies'
          onClick={()=>toOrders()}
        />
        <Button
          text='Logout'
          onClick={()=>logout()}
        />
      </ButtonsRow>
    </StyledNav>
    );
    }
    
};


const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${prop => prop.transparent 
                            ? 'hsl(180, 8%, 17%, 88%)' 
                            : 'hsl(180, 8%, 17%, 50%)'
                    };
  height: 5em;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;
const Title = styled.h1`
  cursor: pointer;
  color: hsl(39, 85%, 47%, 88%);
  text-shadow: 0.1em 0.05em  rgba(0,0,0,0.30);
  margin-left: 1em;
  font-size: 2em;
`;
const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 1em;
  width: 100%;
  z-index: 100;
`;

export default connect((state)=>({
  credentials: state.credentials
}))(Nav);