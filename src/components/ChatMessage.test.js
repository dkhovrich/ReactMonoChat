import React from 'react';
import { shallow } from 'enzyme';
import ChatMessage from './ChatMessage';
import MessageModel from '../models/message';

const message = new MessageModel('test');

describe('Chat message', () => {
  it('should render chat message and time', () => {
    const wrapper = shallow(<ChatMessage message={message} />);
    const elements = wrapper.find('span');

    expect(elements.length).toBe(2);
    expect(elements.at(0).text()).toBe(message.text);
    expect(elements.at(1).text()).toBe(message.displayTime);
  });
});