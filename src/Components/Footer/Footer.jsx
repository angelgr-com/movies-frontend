import styled from 'styled-components';


const Footer = () => {
  return (
    <StyledFooter>
      <span>2022 AtomPlay</span><br/>
      <span>This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
    </StyledFooter>
  )
};

const StyledFooter = styled.footer`
  background-color: #282f2f;
  color: hsl(0, 8%, 83%);
  height: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Footer;