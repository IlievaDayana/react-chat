import ResendIcon from "../Icons/ResendIcon";
import { BubbleProps } from "../types";

const Bubble: React.FC<BubbleProps> = ({
  variant = "primary",
  children,
  content,
}) => {
  let variantClasses;
  const baseClasses =
    "py-2.75 px-3.75 relative block relative block rounded-lg max-w-375px mb-5 text-left w-fit pre-wrap";

  switch (variant) {
    case "assistant":
      variantClasses = "bg-gray-600 ml-0 mr-auto";
      break;
    case "user":
      variantClasses = "bg-green-600 text-white ml-auto mr-0 js-user";
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
