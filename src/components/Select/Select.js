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

  _handleSelect = () => {
    this.setState(prev => ({
      ...prev,
      isOptionsVisible: true,
    }))
  }

  _renderSelect = () => {
    const { isOptionsVisible } = this.state;
    if (!isOptionsVisible)
      return <div className='select-btn-open' onClick={() => this._handleSelect()}>Select button</div>
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