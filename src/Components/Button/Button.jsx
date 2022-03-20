import React from 'react';
import styled from 'styled-components';

const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{ text }</StyledButton>
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  margin: 0 1em;
  background-color: hsl(39, 86%, 47%);
  border-radius: 0.5rem;
  border: 0;
  color: hsl(233, 19%, 18%);
  cursor: pointer;
  font-weight: bolder;
  font-size: 1rem;
  outline: 0;
  padding: 0.5rem 1rem; 
`;

export default Button;