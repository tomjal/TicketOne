const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
global.location = { origin: 'http://localhost' };
global.IN_TEST = true;