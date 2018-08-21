export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';

export const addMessage = message => dispatch => {
  dispatch({ type: ADD_MESSAGE_REQUEST });

  setTimeout(() => {
    dispatch({ type: ADD_MESSAGE_SUCCESS, payload: message });
  }, 300)
};