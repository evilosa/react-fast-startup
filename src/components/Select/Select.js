import * as React from 'react'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      options: [],
      isOptionsVisible: false
    }
  }

  render() {
    return <div>Select</div>
  }
}

export default Select