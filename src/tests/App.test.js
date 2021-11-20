import { render, screen } from '@testing-library/react';
import App from './App';

//Don't think I'll be making tests with the tio

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
