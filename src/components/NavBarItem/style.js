import Color from 'color';

export const NavBarItemColors = {
  color: '#fff',
  background: '#222222',
  backgroundActive: '#4e4343',
};

export const createNavBarItemStyle = (colors = NavBarItemColors) => ({
  base: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '40px',
    cursor: 'pointer',
    color: colors.color,
    background: colors.background,
    borderRadius: '4px 0 0 4px',
    padding: '5px',

    ':hover': {
      background: Color(colors.background).lighten(0.2).hex(),
    }
  },

  horizontal: {
    flexDirection: 'row',
  },

  vertical: {
    flexDirection: 'column',
  },

  active: {
    background: colors.backgroundActive,
    ':hover': {
      background: Color(colors.backgroundActive).lighten(0.2).hex(),
    }
  }
});

export const NavBarItemStyle = createNavBarItemStyle(NavBarItemColors);

export default NavBarItemStyle;
