import { useReducer, Reducer, Action } from '@/index';
import cloneDeepWith from 'lodash.clonedeepwith';

type TestState = {
  count: number;
};

type TestActionTypes = 'increment';

interface TestAction extends Action {
  type: TestActionTypes;
}

/** mocks */
const mockReducer = jest.fn();

/** fixtures */
const testState: TestState = {
  count: 0,
};
let initialTestState: TestState;

const testReducer: Reducer<TestState, TestAction> = (state, action) => {
  mockReducer(cloneDeepWith(state), action);
  switch (action.type) {
    case 'increment':
      state.count++;
      break;
  }
};

/** tests */

beforeEach(() => {
  initialTestState = cloneDeepWith(testState);
});

afterEach(() => {
  mockReducer.mockClear();
});

describe('useReducer', () => {
  describe('create store', () => {
    it('index one is state, index two is dispatch', () => {
      const [state, dispatch] = useReducer(testReducer, initialTestState);

      expect(state).toEqual(testState);
      expect(typeof dispatch).toBe('function');
    });
  });

  describe('dispatch', () => {
    it('runs reducer', () => {
      const [_, dispatch] = useReducer(testReducer, initialTestState);
      dispatch({ type: 'increment' });

      expect(mockReducer).toBeCalledWith({ count: 0 }, { type: 'increment' });
    });

    it('state.count is incremented', () => {
      const [state, dispatch] = useReducer(testReducer, initialTestState);
      dispatch({ type: 'increment' });

      expect(state.count).toBe(1);
    });
  });
});
