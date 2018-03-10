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

  _renderSelect = () => {
    const { isOptionsVisible } = this.state;
    if (!isOptionsVisible)
      return <div className='select-btn-open'>Select button</div>
  }

  render() {
    return (
      <div>
        {this._renderSelect()}
      </div>
    )
  }
}

export default Select