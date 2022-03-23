import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import LoginButton from "./Login";
import Logo3 from "../img/Logo3.png";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   text-decoration: underline crimson;
// `;
const Logo = styled.img``;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
`;

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src={Logo3} />
          </Link>
          <Menu>
            <Link to="/contacto">
              <MenuItem>Contacto</MenuItem>
            </Link>
          </Menu>
        </Left>
        {isAuthenticated ? (
          <>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
