import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

import { createCounterStore } from '@fixtures/store/counter';
import { createTestComponent } from '@fixtures/components/TestComponent';

describe('TestComponent', () => {
  let wrapper: Wrapper<Vue>;
  let countText: Wrapper<Vue>;

  beforeEach(() => {
    const TestComponent = createTestComponent(createCounterStore());
    wrapper = shallowMount(TestComponent);
    countText = wrapper.find('#count');
  });

  describe('mount', () => {
    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('count is 0', () => {
      expect(countText.text()).toBe('0');
    });
  });

  describe('evnets', () => {
    it('increment', () => {
      const button = wrapper.find('#button-increment');
      button.trigger('click');
      expect(countText.text()).toBe('1');
    });

    it('decrement', () => {
      const button = wrapper.find('#button-decrement');
      button.trigger('click');
      expect(countText.text()).toBe('-1');
    });

    it('increment, decrement', () => {
      const incrementButton = wrapper.find('#button-increment');
      const decrementButton = wrapper.find('#button-decrement');
      incrementButton.trigger('click');
      decrementButton.trigger('click');
      expect(countText.text()).toBe('0');
    });
  });
});
