export const SelectColors = {
  font: '#fff',
  rootDark: '#35414a',
  rootSemilight: '#86919a',
  rootBlue: '#5aafee',
  rootBorder: '#edf0f5',
  titleBorder: '#ff6f13',
  valueBorder: '#5bff42',
  optionsBorder: '#fcff19',
  searchBorder: '#ff0019',
  background: '#222222',
};

const defaultBorder = {
  borderWidth: '1px',
  borderStyle: 'solid',
}

export const createSelectStyle = (colors = SelectColors) => ({
  root: {
    display: 'flex',
    flex: '1 0',
    ...defaultBorder,
    fontFamily: "'Raleway', sans-serif",
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '18px',
    fontStretch: '100%',
    borderColor: colors.rootBorder
  },

  title: {
    display: 'flex',
    padding: '5px',
    alignItems: 'center',
    minWidth: '150px',
    // ...defaultBorder,
  },

  value: {
    flex: '1 0',
    padding: '5px',
    minHeight: '20px',
    // ...defaultBorder,
    fontWeight: '500',
    borderLeft: '1px',
    borderTop: '0',
    borderBottom: '0',
    borderRight: '0',
    borderStyle: 'solid',
    borderColor: colors.rootBorder,
    // borderColor: colors.valueBorder,
  },

  optionsList: {
    display: 'flex',
    flexDirection: 'column',
    color: colors.font,
    backgroundColor: colors.rootDark,
    position: 'absolute',
    maxHeight: '160px',
    minWidth: '260px',
    zIndex: '1',
    overflowY: 'auto',
    overflowX: 'hidden',
  },

  optionsListItem: {
    backgroundColor: colors.rootDark,
    color: colors.color,
    padding: '12px 16px',
    ':hover': {
      color: colors.font,
      backgroundColor: colors.rootBlue,
    },
  },

  optionsSearch: {
    color: colors.font,
    backgroundColor: colors.rootDark,
    padding: '12px 16px',
    marginRight: '10px',
  }
});

export const SelectStyle = createSelectStyle();

export default SelectStyle;
