// @flow
import * as React from 'react';

import './ChatMessage.css';
import MessageModel from '../models/message';

const ChatMessage = ({ message }: { message: MessageModel }) => {
  return (
    <div className="chat-message-container bg-info">
      <span>{message.text}</span>
      {message.displayTime}
    </div>
  );
};

export default ChatMessage;