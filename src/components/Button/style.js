import Color from 'color';

export const ButtonColors = {
  baseColor: '#fff',
  baseBackground: '#222222',
  primaryBackground: '#0074d9',
  warningBackground: '#f00',
};

export const createButtonStyle = (colors = ButtonColors) => ({
  base: {
    color: colors.baseColor,
    ':hover': {
      background: Color(colors.baseBackground).lighten(0.2).hex(),
    },
    background: colors.baseBackground,
  },

  primary: {
    background: colors.baseBackground,
  },

  small: {
    fontSize: '12px',
    padding: '5px',
    fontWeight: '300',
    borderRadius: '4px',
  },

  normal: {
    fontSize: '16px',
    fontWeight: '300',
    padding: '10px',
    borderRadius: '4px',
  },

  big: {
    fontSize: '24px',
    fontWeight: '300',
    padding: '15px',
    minWidth: '150px',
    borderRadius: '4px',
  },

  warning: {
    background: colors.warningBackground,
  }
});

export const ButtonStyle = createButtonStyle(ButtonColors);

export default ButtonStyle;
