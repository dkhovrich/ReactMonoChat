// @flow
import moment from 'moment';

class MessageModel {
  text: string;
  date: any;

  constructor(text: string) {
    this.text = text;
    this.date = moment();
  }

  get utc(): number {
    return this.date.valueOf();
  }

  get displayTime(): string {
    return this.date.format('HH:mm:ss');
  }
}

export default MessageModel;