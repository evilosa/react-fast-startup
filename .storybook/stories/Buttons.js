import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../src/components/Button';

storiesOf('Button', module)
  .add('default',
    withInfo({
      components: { Button },
      header: true,
      inline: true,
      text: 'Her bi tam',
    })(() => (
      <div>
        <Button onClick={action('clicked')} type="small">Small</Button>
        <Button onClick={action('clicked')}>Normal</Button>
        <Button onClick={action('clicked')} type="big">Big</Button>
      </div>
  )));