import { nextTick } from 'vue-demi';
import { shallowMount } from '@vue/test-utils';

import { createCounterStore } from '@fixtures/store/counter';
import {
  createCounterComponent,
  CounterComponent as CounterComponentType,
} from '@fixtures/components/CounterComponent';
import type { VueWrapper, DOMWrapper } from '@vue/test-utils';

describe('CounterComponent', () => {
  let wrapper: VueWrapper<CounterComponentType>;
  let countTextWrapper: DOMWrapper<Element>;

  beforeEach(() => {
    const CounterComponent = createCounterComponent(createCounterStore());
    wrapper = shallowMount(CounterComponent);
    countTextWrapper = wrapper.find('#count');
  });

  describe('mount', () => {
    it('count is 0', () => {
      expect(countTextWrapper.text()).toBe('0');
    });
  });

  describe('evnets', () => {
    it('increment', async () => {
      const button = wrapper.find('#button-increment');
      button.trigger('click');
      await nextTick();
      expect(countTextWrapper.text()).toBe('1');
    });

    it('decrement', async () => {
      const button = wrapper.find('#button-decrement');
      button.trigger('click');
      await nextTick();
      expect(countTextWrapper.text()).toBe('-1');
    });

    it('increment, decrement', async () => {
      const incrementButton = wrapper.find('#button-increment');
      const decrementButton = wrapper.find('#button-decrement');
      incrementButton.trigger('click');
      decrementButton.trigger('click');
      await nextTick();
      expect(countTextWrapper.text()).toBe('0');
    });
  });
});
