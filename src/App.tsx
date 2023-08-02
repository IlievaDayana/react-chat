import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Loader from "./Components/Loader";
import ChatHeading from "./Components/ChatHeading";
import ChatWrapper from "./Components/ChatWrapper";
import WrapperContainer from "./Components/MainWrapper";
import MessagesContainer from "./Components/MessagesContainer";
import InitiatorProfile from "./Components/InitiatorProfile";
import SendIcon from "./Icons/Send";
import Input from "./Components/Input";
import { assistant } from "./config/assistant";
import { translations } from "./config/translations";
import Bubble from "./Components/Bubble";
import { Message } from "./types";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [messages, setMessages] = React.useState<Message[]>(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    const newMessage = e.currentTarget.value;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        variant: "user", // or 'assistant', depending on who is sending the message
        content: newMessage,
      },
    ]);

    e.currentTarget.value = "";
  };

  return (
    <WrapperContainer>
      <ChatWrapper>
        <ChatHeading config={assistant} />
        <MessagesContainer>
          <InitiatorProfile config={assistant} />
          {messages.map((message: any, index: number) => (
            <Bubble
              key={index}
              variant={message.variant}
              content={message.content}
            />
          ))}
        </MessagesContainer>
        <Loader isLoading={isLoading} />
        <div>
          <div className="js-error error-message hidden">
            {translations.error}
          </div>
          <div
            className="flex justify-between items-center pt-0 px-5 py-2.75"
            id="prompt-container"
          >
            <span className="rounded-custom bg-lumina w-full mr-2.75">
              <Input
                id="chat-prompt"
                minLength={1}
                name="chat"
                autoFocus={true}
                type="text"
                placeholder={translations.textareaPlaceholder}
                onKeyUp={handleKeyUp}
              />
            </span>
            <Button variant={"circle"} id={"send-button"}>
              <SendIcon />
            </Button>
          </div>
        </div>
      </ChatWrapper>
    </WrapperContainer>
  );
}

export default App;
