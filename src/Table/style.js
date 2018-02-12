export const TableColors = {
  baseBackground: '#fff',
  evenBackground: '#bec7be',
};

export const createTableStyle = (colors = TableColors) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
  },

  header: {
    display: 'flex',
    flex: '1 0',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
  },

  footer: {
    display: 'flex',
    flex: '1 0',
  },

  tableRow: {
    display: 'flex',
    flex: '1 0',
    background: colors.baseBackground,
  },

  even: {
    background: colors.evenBackground,
  },

  tableHeaderColumn: {
    display: 'flex',
    flex: '1 0',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold'
  },

  tableRowColumn: {
    flex: '1 0',
  }
});

export const TableStyle = createTableStyle(TableColors);

export default TableStyle;
