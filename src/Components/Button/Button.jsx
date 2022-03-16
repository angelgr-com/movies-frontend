import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: orange;
  border-radius: 0.5rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  outline: 0;
  padding: 1rem 2rem; 
`;

const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{ text }</StyledButton>
};

export default Button;