import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();

});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: /\+/i });
  const countDisplay = screen.getByTestId('count');

  userEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('1');

  userEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByRole('button', { name: /\-/i });
  const countDisplay = screen.getByTestId('count');

  userEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('-1');

  userEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('-2');
});
