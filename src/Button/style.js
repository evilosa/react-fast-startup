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
    background: colors.primaryBackground,
  },

  warning: {
    background: colors.warningBackground,
  }
});

export const ButtonStyle = createButtonStyle(ButtonColors);

export default ButtonStyle;
