import { nextTick } from 'vue-demi';
import { shallowMount } from '@vue/test-utils';

import { createUsersStore } from '@fixtures/store/users';
import {
  createUsersComponent,
  UsersComponent as UsersComponentType,
} from '@fixtures/components/UsersComponent';
import type { VueWrapper, DOMWrapper } from '@vue/test-utils';

describe('UsersComponent', () => {
  let wrapper: VueWrapper<UsersComponentType>;
  let userListWrapper: DOMWrapper<Element>;

  beforeEach(() => {
    const UsersComponent = createUsersComponent(createUsersStore());
    wrapper = shallowMount(UsersComponent);
    userListWrapper = wrapper.find('ul');
  });

  describe('mount', () => {
    it('users is none', () => {
      expect(userListWrapper.findAll('li')).toHaveLength(0);
    });
  });

  describe('action', () => {
    it('add', async () => {
      wrapper.vm.add();
      await nextTick();
      const firstLiWrapper = userListWrapper.find('li');
      const idWrapper = firstLiWrapper.find('.id');
      const nameWrapper = firstLiWrapper.find('.name');
      const emailWrapper = firstLiWrapper.find('.email');

      expect(userListWrapper.findAll('li')).toHaveLength(1);
      expect(idWrapper.text()).toStrictEqual(expect.any(String));
      expect(nameWrapper.text()).toBe('test name');
      expect(emailWrapper.text()).toBe('test@example.com');
    });

    it('update user name', async () => {
      wrapper.vm.add();
      wrapper.vm.updateName();
      await nextTick();

      const firstLiWrapper = userListWrapper.find('li');
      const idWrapper = firstLiWrapper.find('.id');
      const nameWrapper = firstLiWrapper.find('.name');
      const emailWrapper = firstLiWrapper.find('.email');

      expect(userListWrapper.findAll('li')).toHaveLength(1);
      expect(idWrapper.text()).toStrictEqual(expect.any(String));
      expect(nameWrapper.text()).toBe('updated test name');
      expect(emailWrapper.text()).toBe('test@example.com');
    });
  });
});
