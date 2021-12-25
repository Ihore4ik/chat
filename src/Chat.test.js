import { render, screen } from '@testing-library/react';
import Chat from "./components/chat/Chat";
import React from "react";

test('renders learn react link', () => {
  render(<Chat />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
