import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

import { createListStore } from '@fixtures/store/list';
import {
  createListComponent,
  ListComponent as ListComponentType,
} from '@fixtures/components/ListComponent';

describe('ListComponent', () => {
  let wrapper: Wrapper<ListComponentType>;
  beforeEach(() => {
    const ListComponent = createListComponent(createListStore());
    wrapper = shallowMount(ListComponent);
  });

  describe('mount', () => {
    it('count is 0', () => {
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(0);
    });
  });

  describe('action', () => {
    it('push', async () => {
      wrapper.vm.push('test');
      await Vue.nextTick();
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(1);
      expect(listItemWrapper.at(0).text()).toBe('test');
    });

    it('pop', async () => {
      wrapper.vm.push('test1');
      wrapper.vm.push('test2');
      wrapper.vm.pop();
      await Vue.nextTick();
      const listItemWrapper = wrapper.findAll('li');
      expect(listItemWrapper).toHaveLength(1);
      expect(listItemWrapper.at(0).text()).toBe('test1');
    });
  });
});
