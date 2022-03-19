import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  margin: 0 1em;
  background-color: orange;
  border-radius: 0.5rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  outline: 0;
  padding: 0.5rem 1rem; 
`;

const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{ text }</StyledButton>
};

export default Button;