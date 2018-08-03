import React from 'react';
import PropTypes from 'prop-types';

import './ChatMessage.css';
import MessageModel from '../models/message';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message-container bg-info">
      <span>{message.text}</span>
      {message.displayTime}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.instanceOf(MessageModel).isRequired
};

export default ChatMessage;