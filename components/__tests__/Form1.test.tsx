import { render, screen } from '@testing-library/react';
import Form1 from '../Form1';

describe('Form1', () => {
  it('renders', () => {
    render(<Form1 />);

    expect(screen.getByText('Form 1')).toBeInTheDocument();
  });
});
