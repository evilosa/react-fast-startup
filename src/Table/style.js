export const TableColors = {
  baseColor: '#fff',
  baseBackground: '#222222',
  primaryBackground: '#0074d9',
  warningBackground: '#f00',
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
