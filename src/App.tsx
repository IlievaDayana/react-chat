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

const config = {
  image:
    "https://storage.1forfit.com/lGbeX4lzNpWGyywHuJxMdegZ6My040jsvtVwZqBv.png",
  name: "MealMentor",
  role: "AI nutritional assistant",
  welcome: "Chat for 1 min, and get diet advise for free!",
};
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  // simulate loading state change after 3 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <WrapperContainer>
      <ChatWrapper>
        <ChatHeading config={config} />
        <MessagesContainer>
          <InitiatorProfile config={config} />
        </MessagesContainer>
        <div>
          <div className="js-error error-message hidden">
            Oops! Something went wrong.
          </div>
          <div className="flex justify-between items-center pt-0 px-5 py-2.75" id="prompt-container">
            <span className="rounded-custom bg-lumina w-full mr-2.75">
              <Input
                id="chat-prompt"
                minLength={1}
                name="chat"
                autoFocus={true}
                type="text"
                placeholder="Write your message here..."
                onKeyUp={handleKeyUp}
              />
            </span>
            <div className="widget__button" id="send-button">
              <SendIcon />
            </div>
          </div>
        </div>
        <Button variant="primary" onClick={() => console.log("Clicked!")}>
          Click me
        </Button>

        <Loader isLoading={isLoading} />
      </ChatWrapper>
    </WrapperContainer>
  );
}

export default App;
