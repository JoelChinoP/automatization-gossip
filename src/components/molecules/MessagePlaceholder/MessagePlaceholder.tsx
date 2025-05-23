import Typography from "@/components/atoms/Typography";

export const MessagePlaceholder: React.FC = () => (
  <div className="flex-1 flex items-center justify-center px-6 py-8">
    <Typography variant="placeholder">
      envíame mensajes anónimos...
    </Typography>
  </div>
);

export default MessagePlaceholder;