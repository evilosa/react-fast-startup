import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/ActionsPane.js');
  require('./stories/Buttons');
}


configure(loadStories, module);