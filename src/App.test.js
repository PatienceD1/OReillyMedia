import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the books header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/books/i);
  expect(header).toBeInTheDocument();
});
