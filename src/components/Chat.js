import React, { Component } from 'react';
import { Panel, Badge } from 'react-bootstrap';

import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
  }

  onNewMessage(message) {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  render() {
    const count = this.state.messages.length;

    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            Mono chat
            {!!count && <Badge pullRight={true}>{count}</Badge>}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <ChatMessages messages={this.state.messages} />
          <ChatInput onSend={this.onNewMessage} />
        </Panel.Body>
      </Panel>
    );
  }
}

export default Chat;