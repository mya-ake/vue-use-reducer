import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

import { createCounterStore } from '@fixtures/store/counter';
import {
  createCounterComponent,
  CounterComponent as CounterComponentType,
} from '@fixtures/components/CounterComponent';

describe('CounterComponent', () => {
  let wrapper: Wrapper<CounterComponentType>;
  let countTextWrapper: Wrapper<Vue>;

  beforeEach(() => {
    const CounterComponent = createCounterComponent(createCounterStore());
    wrapper = shallowMount(CounterComponent);
    countTextWrapper = wrapper.find('#count');
  });

  describe('mount', () => {
    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('count is 0', () => {
      expect(countTextWrapper.text()).toBe('0');
    });
  });

  describe('evnets', () => {
    it('increment', () => {
      const button = wrapper.find('#button-increment');
      button.trigger('click');
      expect(countTextWrapper.text()).toBe('1');
    });

    it('decrement', () => {
      const button = wrapper.find('#button-decrement');
      button.trigger('click');
      expect(countTextWrapper.text()).toBe('-1');
    });

    it('increment, decrement', () => {
      const incrementButton = wrapper.find('#button-increment');
      const decrementButton = wrapper.find('#button-decrement');
      incrementButton.trigger('click');
      decrementButton.trigger('click');
      expect(countTextWrapper.text()).toBe('0');
    });
  });
});
