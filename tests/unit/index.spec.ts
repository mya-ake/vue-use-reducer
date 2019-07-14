import { useReducer, VueUseReducer } from '@/index';
import { cloneDeepWith } from 'lodash';

type TestState = {
  count: number;
};

type TestActionTypes = 'INCREMENT';

interface TestAction {
  type: TestActionTypes;
}

/** mocks */
const mockReducer = jest.fn();

/** fixtures */
const testState: TestState = {
  count: 0,
};
let initialTestState: TestState;

const testReducer: VueUseReducer.Reducer<TestState, TestAction> = (
  state,
  action,
) => {
  mockReducer(cloneDeepWith(state), action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
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

    it('sets initial state', () => {
      const [state] = useReducer(testReducer, { count: 1 });

      expect(state).toEqual({ count: 1 });
    });

    it('runs initial action', () => {
      const [state] = useReducer(testReducer, initialTestState, {
        type: 'INCREMENT',
      });

      expect(state).toEqual({ count: 1 });
    });
  });

  describe('dispatch', () => {
    it('runs reducer', () => {
      const [_, dispatch] = useReducer(testReducer, initialTestState);
      dispatch({ type: 'INCREMENT' });

      expect(mockReducer).toBeCalledWith({ count: 0 }, { type: 'INCREMENT' });
    });

    it('state.count is incremented', () => {
      const [state, dispatch] = useReducer(testReducer, initialTestState);
      dispatch({ type: 'INCREMENT' });

      expect(state.count).toBe(1);
    });
  });
});
