import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import './ChatInput.css';

import MessageModel from '../models/message';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.sendMessage();
  }

  sendMessage() {
    if (this.state.value) {
      const message = new MessageModel(this.state.value);
      this.props.onSend(message);

      this.setState({ value: '' });
    }
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

ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired
}

export default ChatInput;