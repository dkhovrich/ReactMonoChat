import React from 'react';
import { shallow } from 'enzyme';
import ChatMessages from './ChatMessages';
import ChatMessage from './ChatMessage';
import MessageModel from '../models/message';

describe('Chat messages', () => {
  const messages = [new MessageModel('test 1'), new MessageModel('test 2')];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChatMessages messages={messages} />);
  });

  it('should render chat messages', () => {
    const chatMessages = wrapper.find(ChatMessage);
    expect(chatMessages.length).toBe(messages.length);

    for (let i = 0; i < chatMessages.length; i++) {
      const chatMessage = chatMessages.at(i);
      expect(chatMessage.prop('message')).toEqual(messages[i]);
    }
  });

  it('should scroll to bottom after new message added', () => {
    wrapper.instance().scrollToBottom = jest.fn();

    wrapper.setProps({ messages: [...messages, new MessageModel('test3')] });
    expect(wrapper.instance().scrollToBottom).toHaveBeenCalled();
  });

  it('should not scroll to bottom is no new messages added', () => {
    wrapper.instance().scrollToBottom = jest.fn();

    wrapper.setProps({ messages });
    expect(wrapper.instance().scrollToBottom).not.toHaveBeenCalled();
  });
});