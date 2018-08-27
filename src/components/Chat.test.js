import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Badge } from 'react-bootstrap';
import { Chat } from './Chat';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import MessageModel from '../models/message';

describe('Chat', () => {
  const messages = [new MessageModel('test 1'), new MessageModel('test 2')];
  const initialState = {};
  const mockStore = configureStore();
  let wrapper;
  let store;
  let onNewMessage;

  beforeEach(() => {
    store = mockStore(initialState);
    onNewMessage = jest.fn();
    wrapper = shallow(<Chat
      store={store}
      messages={messages}
      onNewMessage={onNewMessage} />
    );
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