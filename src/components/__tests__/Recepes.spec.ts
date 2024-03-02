import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RecepiesChat from '@/components/ShoppingLogic/RecepiesChat.vue'

describe('RecepiesChat', () => {
    it('renders properly', () => {
      const wrapper = mount(RecepiesChat);
      expect(wrapper.exists()).toBe(true);
    });
  });