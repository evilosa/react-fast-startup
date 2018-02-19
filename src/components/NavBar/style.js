export const NavBarColors = {
  color: '#fff',
  background: '#222222',
};

export const createNavBarStyle = (colors = NavBarColors) => ({
  base: {
    display: 'flex',
    color: colors.color,
    background: colors.background,
  },

  horizontal: {
    height: '50px',
    flexDirection: 'row',
  },

  vertical: {
    width: '200px',
    padding: '15px 0 15px 15px',
    flexDirection: 'column',
  },
});

export const NavBarStyle = createNavBarStyle(NavBarColors);

export default NavBarStyle;
