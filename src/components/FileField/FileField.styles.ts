export default (theme: any) => ({
  inputFieldWrapper: {
    cursor: 'pointer'
  },

  inputWithPlaceholder: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '23px 14px 5px',
    paddingBottom: 5,
    paddingTop: 23,
    border: '0',
    backgroundColor: 'rgba(0,0,0,0)',
    transition: '0.5s',
    color: '#54738c',
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  input: {
    display: 'block',
    width: '100%',
    height: '100%',
    padding: 14,
    opacity: '0',
    cursor: 'pointer'
  },

  append: {
    marginRight: 12,
    padding: '0 24px',
    borderRadius: 4.4,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '23px',
    cursor: 'pointer',

    '&.fileNotSelected': {
      color: '#007aff',
      border: 'solid 1px #007aff',
      backgroundColor: '#fff'
    },

    '&.fileSelected': {
      color: '#fff',
      border: 'solid 1px #007aff',
      backgroundColor: '#007aff'
    },
  },
});
