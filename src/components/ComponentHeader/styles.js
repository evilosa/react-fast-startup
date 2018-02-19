const height = '32px';
const minHeight = '28px';
const maxHeight = '40px';

export const ComponentHeaderStyle = {
  base: {
    display: 'flex',
    flex: '1 0',
    height,
    minHeight,
    maxHeight,
    margin: '2px',
  },

  top: {
    flexDirection: 'column',
  },

  bottom: {
    flexDirection: 'column-reverse',
  },

  left: {
    flexDirection: 'row',
  },

  right: {
    flexDirection: 'row-reverse',
  },

  header: {
    flex: '1 0',
    maxWidth: '150px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRight: '0',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    padding: '3px 10px',
    borderRadius: '4px 0px 0px 4px',
    fontWeight: '600',
  },

  content: {
    display: 'flex',
    border: '1px solid green',
    flex: '1 0',
    borderRadius: '0px 4px 4px 0px',
  },
};

export default ComponentHeaderStyle;