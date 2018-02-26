export const TableColors = {
  baseBackground: '#fff',
  evenBackground: '#EEF3F5',
  border: '#D7DBDD',
  headerBackground: '#FCFDFD',
  headerText: '#16A2D7'
}

export const createTableStyle = (colors = TableColors) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
  },

  header: {
    display: 'flex',
    flex: '1 0',
    backgroundColor: colors.headerBackground,
    minHeight: '30px',
    maxHeight: '30px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.border
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
  },

  footer: {
    display: 'flex',
    flex: '1 0',
    minHeight: '30px',
    maxHeight: '30px',
  },

  tableRow: {
    display: 'flex',
    flex: '1 0',
    background: colors.baseBackground,
    minHeight: '30px',
    maxHeight: '30px',
  },

  even: {
    background: colors.evenBackground,
  },

  tableHeaderColumn: {
    display: 'flex',
    flex: '1 0',
    padding: '5px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    fontStretch: '100%',
    color: colors.headerText,
  },

  tableRowActionColumn: {
    flex: '1 0',
    padding: '5px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    fontStretch: '100%',
  },

  tableRowColumn: {
    flex: '1 0',
    padding: '5px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    fontStretch: '100%',
  }
})

export const TableStyle = createTableStyle(TableColors)

export default TableStyle
