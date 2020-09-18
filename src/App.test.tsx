import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// https://testing-library.com/docs/react-testing-library/api
// https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2
test('renders without crashing', () => {
	render(<App />);
});

test('renders with slideshow props', () => {
	const { getAllByText } = render(<App />)
	expect(getAllByText('Test1')[0]).toBeInTheDocument();
})
describe('Mulig å få delt opp som dette også <App /> spec', () => {
	it('renders the component', () => {
		const { container } = render(<App />)
		expect(container.firstChild).toMatchSnapshot()
	})
	/*
	it('assert there are 6 regions', () => {
		expect(document.querySelectorAll('.map-region').length).toBe(6)
	})
	it('assert there are 12 region items', () => {
		expect(document.querySelectorAll('.region-item').length).toBe(12)
	})
	*/
});
