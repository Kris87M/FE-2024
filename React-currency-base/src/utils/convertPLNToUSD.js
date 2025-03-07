export const convertPLNToUSD = (PLN) => {

  if (typeof PLN === 'undefined' || typeof PLN === '') {
    return NaN;
  }

  if (typeof PLN === 'string') {
    const numPLN = parseFloat(PLN);
    if (isNaN(numPLN)) {
      return NaN;
    };
    PLN = numPLN;
  }

  if (typeof PLN !== 'number') {
    return 'Error';
  }

  if (PLN < 0) {
    return '$0.00';
  };

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}
