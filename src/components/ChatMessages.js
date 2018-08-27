// @flow
import * as React from 'react';
import './ChatMessages.css';

import ChatMessage from './ChatMessage';
import MessageModel from '../models/message';

type Props = {
  messages: Array<MessageModel>
};

class ChatMessages extends React.Component<Props> {
  containerRef: any;

  constructor(props: Props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
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

export default ChatMessages;