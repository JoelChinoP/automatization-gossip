export interface MessageInputProps {
  onSend: (message: string) => Promise<void>;
  className?: string;
}
  