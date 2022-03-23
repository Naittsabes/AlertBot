import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Personas from "../img/personas.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 40px;
  }
  @media only screen and (max-width: 1080px) {
    width: 60%;
    font-size: 40px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #0b556a;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>
          Si has sido víctima o testigo de algún delito sexual es importante que
          lo denuncies
        </Title>
        <Desc>
          La víctima o quien pueda denunciar por ella puede realizarlo
          virtualmente
        </Desc>
        <Info>
          <Link to="/AlertBot">
            <Button>Inicia tu denuncia</Button>
          </Link>
          <Contact></Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Personas} />
      </Right>

      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
