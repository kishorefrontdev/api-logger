// axios-mock.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Mock a GET request to an example API endpoint
mock.onGet('http://api.test.com/api/apilog').reply(200, {
  data: 'mocked response',
});

export default mock;
