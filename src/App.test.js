import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Replace with the path to your component file

describe('App Component', () => {
  it('should render without errors', async () => {
    render(<App />);

    expect(screen.getByText('API Logger')).toBeInTheDocument();
  });
  it('Render input elements', async () => {
    render(<App />);

    expect(screen.getByText('Payload')).toBeInTheDocument();
    expect(screen.getByText('Response')).toBeInTheDocument();
    expect(screen.getByText('Tag Name')).toBeInTheDocument();
    expect(screen.getByText('Endpoint')).toBeInTheDocument();
    expect(screen.getByText('Created By')).toBeInTheDocument();
    expect(screen.getByText('submit')).toBeInTheDocument();
  });
});
