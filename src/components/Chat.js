import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import ChatInput from './ChatInput';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
  }

  onNewMessage(message) {
    console.log(message);
  }

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Mono chat</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <ChatInput onSend={this.onNewMessage} />
        </Panel.Body>
      </Panel>
    );
  }
}

export default Chat;