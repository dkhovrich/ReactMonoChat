import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Panel, Badge } from 'react-bootstrap';

import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { addMessage } from '../actions/messageActions';

import MessageModel from '../models/message';

export const Chat = ({ messages, onNewMessage }) => {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">
          Mono chat
            {!!messages.length && <Badge pullRight={true}>{messages.length}</Badge>}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <ChatMessages messages={messages} />
        <ChatInput onSend={onNewMessage} />
      </Panel.Body>
    </Panel>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)).isRequired,
  onNewMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages.data
});

const mapDispatchToProps = dispatch => ({
  onNewMessage: message => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);