export const PageColors = {
  color: '#fff',
  background: '#222222',
};

export const createPageStyle = (/*colors = PageColors*/) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
    width: '100%',
    height: '100%',
  },

  header: {
    display: 'flex',
    flex: '1 0',
    height: 'auto',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0',
  },

  footer: {
    display: 'flex',
    flex: '1 0',
    height: 'auto',
  }
});

export const ButtonStyle = createPageStyle();

export default ButtonStyle;
