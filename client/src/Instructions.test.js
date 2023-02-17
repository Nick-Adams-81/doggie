import { render, screen } from '@testing-library/react';
import Instructions from './Instructions';

test('should render topbloc coding challenge', () => {
    render(<Instructions />)
    const headerElement = screen.getByText(/topbloc coding challenge/i)
    expect(headerElement).toBeInTheDocument()
})