import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatMessages.css';

import ChatMessage from './ChatMessage';
import MessageModel from '../models/message';

class ChatMessages extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > prevProps.messages.length) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.containerRef.current.scrollTop = this.containerRef.current.scrollHeight;
  }

  render() {
    return (
      <div ref={this.containerRef} className="chat-messages-container">
        {this.props.messages.map(message => <ChatMessage key={message.utc} message={message} />)}
      </div>
    )
  }
}

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)).isRequired
};

export default ChatMessages;