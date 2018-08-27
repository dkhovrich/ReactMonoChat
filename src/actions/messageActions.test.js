import * as actions from './messageActions';
import MessageModel from '../models/message';

describe('message actions', () => {
  it('should create an action to add message', () => {
    const message = new MessageModel('test');
    const expectedAction = { type: actions.ADD_MESSAGE_REQUEST, payload: message };

    expect(actions.addMessage(message)).toEqual(expectedAction);
  });
});