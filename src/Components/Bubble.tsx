import ResendIcon from "../Icons/ResendIcon";
import { BubbleProps } from "../types";

const Bubble: React.FC<BubbleProps> = ({
  variant = "primary",
  children,
  content,
}) => {
  let variantClasses;
  const baseClasses =
    "py-2.75 px-3.75 relative block relative block max-w-375px mb-5 text-left w-fit pre-wrap";

  switch (variant) {
    case "assistant":
      variantClasses =
        "bg-messages-assistant text-messages-assistant-text shadow-messages-assistant-shadow rounded-tr-custom rounded-b-custom ml-0 mr-auto";
      break;
    case "user":
      variantClasses =
        "text-messages-user-text bg-messages-user shadow-messages-user-shadow rounded-bl-custom rounded-t-custom ml-auto mr-0 js-user";
      break;
    default:
      variantClasses = "bg-blue-600 hover:bg-blue-700";
  }

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {children}
      {variant === "assistant" ? (
        <span className="js-assistant-message">{content}</span>
      ) : variant === "user" ? (
        <span>
          {content}
          <span className="resend-icon hidden">
            <ResendIcon className="absolute w-5 h-5 top-2/4 left-2/4 translate-center fill-white" />
          </span>
        </span>
      ) : null}
    </span>
  );
};

export default Bubble;
