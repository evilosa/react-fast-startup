import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/ActionsPane.js');
  require('./stories/Buttons');
  require('./stories/Buttons2');
}


configure(loadStories, module);