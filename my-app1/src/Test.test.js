// setupTests.js
import '@testing-library/jest-dom';

// LoginForm.test.js
import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import LoginForm from './Test';

/*test('renders username input and login button', () => {
  render(<LoginForm />);
  
  // Check that input and button appear
  const input = screen.getByLabelText(/username/i);
  const button = screen.getByRole('button', { name: /login/i });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});*/

test("render username and button ", () => {
    render(<LoginForm />)
    const input = screen.getByLabelText(/username/i);
    const button = screen.getByRole('button', {name:/login/i})
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test('updates input value when typed into', () => {
  render(<LoginForm />);
  
  const input = screen.getByLabelText(/username/i);
  
  // Simulate typing
  fireEvent.change(input, { target: { value: 'sunil' } });
  
  expect(input.value).toBe('sunil');
});

test('submits the form without crashing', () => {
  render(<LoginForm />);
  
  const button = screen.getByRole('button', { name: /login/i });

  // Submit form
  fireEvent.click(button);

  // No assertion — just confirming it doesn't crash
});

test("update the input values when typed into", () => {
    render(<LoginForm/>)
    const input = getByLabelText(/username/i);
    fireEvent.change
})
