import Vue from 'vue';
import { shallowMount, Wrapper, WrapperArray } from '@vue/test-utils';

import { createListStore } from '@fixtures/store/list';
import { createListComponent } from '@fixtures/components/ListComponent';

describe('ListComponent', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    const ListComponent = createListComponent(createListStore());
    wrapper = shallowMount(ListComponent);
  });

  describe('mount', () => {
    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('count is 0', () => {
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(0);
    });
  });

  describe('action', () => {
    it('push', () => {
      // @ts-ignore 2339
      wrapper.vm.push('test');
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(1);
      expect(listItemWrapper.at(0).text()).toBe('test');
    });

    it('pop', () => {
      // @ts-ignore 2339
      wrapper.vm.push('test1');
      // @ts-ignore 2339
      wrapper.vm.push('test2');
      // @ts-ignore 2339
      wrapper.vm.pop();
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(1);
      expect(listItemWrapper.at(0).text()).toBe('test1');
    });
  });
});
