import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
//import 'jest-canvas-mock';
// https://testing-library.com/docs/react-testing-library/api
// https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2

describe('Testing for component: <App />', () => {
	it('renders the component correctly without crashing', () => {
		const testRenderer = TestRenderer.create(<App />).toJSON();
		expect(testRenderer).toMatchSnapshot();
	});
});


