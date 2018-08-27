import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from 'react-bootstrap';
import { Chat } from './Chat';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import MessageModel from '../models/message';

describe('Chat', () => {
  const messages = [new MessageModel('test 1'), new MessageModel('test 2')];
  let wrapper;
  let onNewMessage;

  beforeEach(() => {
    onNewMessage = jest.fn();
    wrapper = shallow(<Chat messages={messages} onNewMessage={onNewMessage} />);
  });

  it('should display message count', () => {
    expect(+wrapper.find(Badge).children().at(0).text()).toBe(messages.length);
  });

  it('should render chat messages', () => {
    expect(wrapper.find(ChatMessages).props().messages).toBe(messages);
  });

  it('should render chat input', () => {
    expect(wrapper.find(ChatInput).props().onSend).toBe(onNewMessage);
  });
});