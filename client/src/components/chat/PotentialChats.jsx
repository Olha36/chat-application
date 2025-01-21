import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const PotentialChats = () => {
  const { potentialChats } = useContext(ChatContext);
  console.log('potential chats are:', potentialChats);
  
  return <>start chat</>;
};

export default PotentialChats;
