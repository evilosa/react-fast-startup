import { configure } from '@storybook/react'

function loadStories() {
  require('./stories/ActionsPane.js')
  require('./stories/Buttons')
  require('./stories/Buttons2')
  require('./stories/Table')
  require('./stories/Page')
  require('./stories/Select')
  require('./stories/SelectWithLoadOptions')
  require('./stories/SelectWithLoadOptionsAsync')
  require('./stories/TableWithAddButton')
}


configure(loadStories, module)