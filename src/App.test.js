import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pet Safe Kennels', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pet Safe Kennels/i);
  expect(linkElement).toBeInTheDocument();
});

//will be testing and proptypes