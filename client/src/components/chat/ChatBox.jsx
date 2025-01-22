import { useContext } from "react";
import { Stack } from "react-bootstrap";
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import { useState } from "react";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  console.log("text message:", textMessage);

  if (!recipientUser)
    return (
      <p style={{ textAlign: "center", width: "100%" }}>
        No conversation selected yet...
      </p>
    );

  if (isMessagesLoading) {
    return (
      <p style={{ textAlign: "center", width: "100%" }}>Loading chat...</p>
    );
  }

  return (
    <Stack gap={4} className="chat-box">
      <div className="chat-header">
        <strong>{recipientUser?.name}</strong>
      </div>
      <Stack gap={3} className="messages">
        {messages &&
          messages.map((message, index) => (
            <Stack
              key={index}
              className={`${
                message?.senderId === user?._id
                  ? "message self align-self-end flex-grow-0"
                  : "message align-self-start flex-grow-0"
              }`}
            >
              <span>{message.text}</span>
              <span className="message-footer">
                {moment(message.createdAt).calendar()}
              </span>
            </Stack>
          ))}
      </Stack>
      <Stack direction="horizontal" gap={3} className="chat-input flex-grow-0">
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          fontFamily="nunito"
          borderColor="rgba(72, 112, 223, 0.2)"
        />
      </Stack>
    </Stack>
  );
};

export default ChatBox;
