import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { formatAmountInCurrency } from '../../utils/formatAmountInCurrency';

describe('Component ResultBox', () => {
  afterEach(() => {
    cleanup();
  });
  
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  
  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
    { amount: '50', from: 'PLN', to: 'PLN' },
    { amount: '500', from: 'USD', to: 'USD' },
    { amount: '-65', from: 'PLN', to: 'USD' },
    { amount: '-72', from: 'USD', to: 'PLN' },
    { amount: '-140', from: 'PLN', to: 'PLN' },
    
  ];

  for (const testObj of testCases) {
    const value = parseInt(testObj.amount);
    const curr1 = testObj.from;
    const curr2 = testObj.to;
    
    if (value >= 0) {
      it('should render proper info about conversion when currency1 -> currency2', () => {
        let expectedValue = curr1 === curr2
        ? value
        : curr1 === 'PLN' && curr2 === 'USD'
        ? (value / 3.5)
        : (value * 3.5);
        
        render(<ResultBox from={curr1} to={curr2} amount={value} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(`${formatAmountInCurrency(value, curr1)} = ${formatAmountInCurrency(expectedValue, curr2)}`);
      });
    } else if (value < 0) {
      it('should render proper info if value is less than zero', () => {
        render(<ResultBox from={curr1} to={curr2} amount={value} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('Wrong value...')
      });
    };
  };
});