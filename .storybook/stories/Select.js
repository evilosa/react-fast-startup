import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Select from '../../src/components/Select';

const options = [
  { id: '0', title: 'Russian federation' },
  { id: '1', title: 'Denmark' },
  { id: '2', title: 'Turkey' },
  { id: '3', title: 'Italy' },
  { id: '4', title: 'USA' }
];

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
        <Select
          title='Countries'
          options={options}
        />
      </div>
    )));