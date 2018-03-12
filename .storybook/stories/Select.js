import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Select from '../../src/components/Select';

storiesOf('Select', module)
  .add('default',
    withInfo({
      components: { Select },
      header: true,
      inline: true,
      text: 'Default select',
    })(() => (
      <div
        style={{height: '400px', width: '100%'}}
      >
        <Select/>
      </div>
    )));