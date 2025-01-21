import React, { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import { ChatContext } from "../context/chatContext";

const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats:", userChats);

  return (
    <Container>
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="flex-grow-0">List</Stack>
          <p>Chatbox</p>
        </Stack>
      )}
    </Container>
  );
};

export default Chat;
