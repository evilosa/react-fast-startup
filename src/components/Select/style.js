export const SelectColors = {
  color: '#fff',
  rootBorder: '#3b88ff',
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
    // flexDirection: 'column',
    flex: '1 0',
    ...defaultBorder,
    borderColor: colors.rootBorder,
  },

  title: {
    display: 'flex',
    padding: '5px',
    alignItems: 'center',
    minWidth: '150px',
    ...defaultBorder,
    borderColor: colors.titleBorder,
  },

  value: {
    flex: '1 0',
    padding: '5px',
    ...defaultBorder,
    borderColor: colors.valueBorder,
  }
});

export const SelectStyle = createSelectStyle();

export default SelectStyle;
