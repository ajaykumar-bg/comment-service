import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Comments header', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Comments/i);
	expect(linkElement).toBeInTheDocument();
});
