import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';
import ChatInput from './ChatInput';
import MessageModel from '../models/message';

describe('Chat input', () => {
  let onSend;
  let wrapper;

  beforeEach(() => {
    onSend = jest.fn();
    wrapper = shallow(<ChatInput onSend={onSend} />);
  });

  it('should submit new message', () => {
    wrapper.setState({ value: 'test' });
    wrapper.find(Button).simulate('click');

    const message = onSend.mock.calls[0][0];

    expect(onSend).toHaveBeenCalled();
    expect(message).toBeInstanceOf(MessageModel);
    expect(message.text).toBe('test');
    expect(wrapper.instance().state.value).toBe('');
  });

  it('submit button should be disabled in case of empty message', () => {
    expect(wrapper.find(Button).prop('disabled')).toBeTruthy();
  });

  it('submit button should be enabled in case of message typed', () => {
    wrapper.setState({ value: 'test' });
    expect(wrapper.find(Button).prop('disabled')).toBeFalsy();
  });
});