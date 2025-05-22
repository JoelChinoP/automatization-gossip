'use client'
import { useState } from 'react';

const SendMessageView = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Message sent:', message);
    // Add logic here to send the message, e.g., via API call
    setMessage(''); // Clear the textarea after sending
  };

  return (
    <div>
      <h1>Send a Message</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={50} placeholder="Enter your message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default SendMessageView;
