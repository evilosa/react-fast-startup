import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../src/Button';

storiesOf('Button', module)
  .add('default',
    withInfo({
      components: { Button },
      header: true,
      inline: true,
      text: 'Her bi tam',
    })(() => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )));