import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
//import 'jest-canvas-mock';
// https://testing-library.com/docs/react-testing-library/api
// https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2

describe('Testing for component: <App />', () => {
	it('renders the component correctly without crashing', () => {
		const tree = TestRenderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('assert there are 13 installations on page', () => {
		expect(document.querySelectorAll('canvas, svg').length).toBe(13)
	})
	it('assert there are 9 poems', () => {
		expect(document.querySelectorAll('.poetryBox').length).toBe(9)
	})
});


