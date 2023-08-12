export type Message = {
  role: string;
  content: string;
};

export type BubbleProps = {
  variant?: "assistant" | "user";
  hidden?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  content: string;
};

export type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "circle";
  hidden?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  id?: string;
};

export type WaveProps = {
  isLoading: boolean;
};
