import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import ChatInput from './ChatInput';

storiesOf('Chat/Input', module)
  .add('Input', withInfo()(() => <ChatInput onSend={action('clicked')} />));