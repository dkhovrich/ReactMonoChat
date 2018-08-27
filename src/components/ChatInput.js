// @flow
import * as React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import './ChatInput.css';

import MessageModel from '../models/message';

type Props = {
  onSend: Function
};

type State = {
  value: string
};

class ChatInput extends React.Component<Props, State> {
  state = {
    value: ''
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  onSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.sendMessage();
  }

  sendMessage = () => {
    if (!this.state.value) return;

    const message = new MessageModel(this.state.value);
    this.props.onSend(message);

    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup bsClass="chat-input-container">
          <FormControl type="text" placeholder="Enter message" value={this.state.value} onChange={this.handleChange}>
          </FormControl>
          <Button bsStyle="primary" disabled={!this.state.value} onClick={this.sendMessage}>Send</Button>
        </FormGroup>
      </form>
    );
  }
}

export default ChatInput;