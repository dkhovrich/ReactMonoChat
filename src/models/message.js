class MessageModel {
  constructor(text) {
    this.id = MessageModel.id++;
    this.text = text;
  }
}

MessageModel.id = 1;

export default MessageModel;