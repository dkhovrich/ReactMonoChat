export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';

export const addMessage = message => ({
  type: ADD_MESSAGE_REQUEST,
  payload: message
});