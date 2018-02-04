export const ActionsPaneColors = {
  border: 'grey',
};

export const createActionsPaneStyle = (colors = ActionsPaneColors) => ({
  base: {
    display: 'flex',
    flex: 1,
    border: `1px solid ${colors.border}`,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: '30px',
    left: {
      justifyContent: 'flex-start',
    },

    center: {
      justifyContent: 'center',
    },

    right: {
      justifyContent: 'flex-end',
    }
  },

  vertical: {
    flexDirection: 'column',
    maxWidth: '200px',
    left: {
      alignItems: 'flex-start',
    },

    center: {
      alignItems: 'center',
    },

    right: {
      alignItems: 'flex-end',
    }
  },
});

export const ActionsPaneStyle = createActionsPaneStyle(ActionsPaneColors);

export default ActionsPaneStyle;