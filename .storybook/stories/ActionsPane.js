import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActionsPane from '../../src/components/ActionsPane';

storiesOf('ActionsPane', module)
  .add('with text', () => (
    <ActionsPane onClick={action('clicked')}>Hello Button</ActionsPane>
  ))
  .add('with some emoji', () => (
    <ActionsPane onClick={action('clicked')}>😀 😎 👍 💯</ActionsPane>
  ));