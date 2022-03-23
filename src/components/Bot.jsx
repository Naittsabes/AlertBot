import React from "react";
import styled from "styled-components";
import Stop from "../img/Stop.png";
import AnimatedShapes from "./AnimatedShapes";
import useScript from "./UseScript";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.4)
    ),
    url(${Stop}) center;
  background-size: cover;
  padding: 10px auto;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 30%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  margin-top: 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  background-color: #0b556a;
  height: 50px;
  border-radius: 10px;
`;

const Titulo = styled.h1`
  font-size: 20px;
  font-family: Glacial;
  line-height: 20px;
  color: whitesmoke;
  display: table-cell;
  padding: 13px 0px 0px 20px;
`;

const BotContainer = () => {
  useScript(
    "https://cdn.botframework.com/botframework-webchat/latest/webchat.js"
  );
  const styleOptions = {
    height: "70vh",
    overflow: "hidden",
    hideUploadButton: true,
    botAvatarInitials: "BT",
    accent: "#003087",
    botAvatarBackgroundColor: "rgba(255, 255, 255, 0.4)",
    botAvatarImage:
      "https://docs.microsoft.com/en-us/azure/bot-service/v4sdk/media/logo_bot.svg",
    userAvatarImage:
      "https://cci-prod-botdesigner.azureedge.net/20200326.4/img/ef9b3564120c0823ad37d8f61b098698.svg",
    userAvatarInitials: "BT",
    userAvatarBackgroundColor: "#FFFFFF",
    suggestedActionLayout: "stacked",
    suggestedActionDisabledBorder: null,
    suggestedActionDisabledBorderColor: "#E6E6E6",
    suggestedActionDisabledBorderStyle: "solid",
    suggestedActionDisabledBorderWidth: 2,
    suggestedActionsStackedLayoutButtonTextWrap: true,
    emojiSet: true,
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgb(11, 85, 106, 0.4), 0 6px 20px 0 rgb(11, 85, 106, 0.5)",
  };

  var BOT_ID = "8f0ec833-518e-41b6-bd5a-d9714dd4d293";

  var theURL =
    "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" +
    BOT_ID;

  fetch(theURL)
    .then((response) => response.json())
    .then((conversationInfo) => {
      window.WebChat.renderWebChat(
        {
          directLine: window.WebChat.createDirectLine({
            token: conversationInfo.token,
          }),
          styleOptions,
        },
        document.getElementById("webchat")
      );
    })
    .catch((err) => console.error("An error occurred: " + err));

  const { isAuthenticated, user } = useAuth0();

  return (
    <Container>
      <Left></Left>
      <Right>
        <Heading>
          <Titulo>
            AlertBot: Hola {isAuthenticated ? user.name : "invitado"}
          </Titulo>
        </Heading>
        <div id="webchat" style={styleOptions} role="main"></div>

        {/* <Link to="/">
          <Button>Volver</Button>
        </Link> */}
      </Right>

      <AnimatedShapes />
    </Container>
  );
};

export default BotContainer;
