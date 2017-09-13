'using strict';

module.exports = {
  delimiter: ' ',
  open: {
    begin: '{{',
    eq: '#eq',
    if: '#if',
    compare: 'compare=\''
  },
  close: {
    end: '}}',
    eq: '/eq',
    if: '/if',
    compare: '\''
  }
};
