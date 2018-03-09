import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Page from '../../src/components/Page';
import PageContent from '../../src/components/PageContent';
import PageFooter from '../../src/components/PageFooter';

storiesOf('Page', module)
  .add('default',
    withInfo({
      components: { Page },
      header: true,
      inline: true,
      text: 'Default page layout',
    })(() => (
      <Page
        header='Page header'
        onClose={action('clicked')}
      >
        <PageContent>
          <div>Content</div>
        </PageContent>
        <PageFooter>
          <div>Footer</div>
        </PageFooter>
      </Page>
  )));