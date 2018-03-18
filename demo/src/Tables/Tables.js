import React from 'react'
import Table from 'components/Table'
import TableColumn from 'components/TableColumn'
import Select from 'components/Select'

const fakeData = [
  { id: '0', title: 'Russian federation' },
  { id: '1', title: 'Denmark' },
  { id: '2', title: 'Turkey' },
  { id: '3', title: 'Egypt' },
  { id: '4', title: 'USA' },
]

class Tables extends React.Component {

  constructor() {
    super()

    this.state = {
      options: [],
    }
  }

  _loadOptionsAsync = (search) => {
    setTimeout(() => {
      this.setState(prev => ({
        ...prev,
        options: fakeData,
      }))
    }, 4000)
  }

  render() {
    const { options } = this.state

    const testItems = [
      { id: 1, name: 'Name 1', fullName: 'Full name 1' },
      { id: 2, name: 'Name 2', fullName: 'Full name 2' },
      { id: 3, name: 'Name 3', fullName: 'Full name 3' },
      { id: 4, name: 'Name 4', fullName: 'Full name 4' },
    ]

    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: '1 0', height: '100%'}}>
        <div>Tables page</div>
        <Select title='Countries' options={options} loadOptionsAsync={this._loadOptionsAsync} />
        <Table items={testItems}>
          <TableColumn header="#" propName="id"/>
          <TableColumn header="Name" propName="name"/>
          <TableColumn header="Full name" propName="full_name"/>
        </Table>
      </div>
    );
  }
}

export default Tables