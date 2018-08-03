import moment from 'moment';

class MessageModel {
  constructor(text) {
    this.id = MessageModel.id++;
    this.text = text;
    this.date = moment();
  }

  get utc() {
    return this.date.valueOf();
  }

  get displayTime() {
    return this.date.format('HH:mm:ss');
  }
}

MessageModel.id = 1;

export default MessageModel;