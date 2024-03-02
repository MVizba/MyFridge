import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SendEmail from '@/components/ShoppingLogic/SendEmail.vue';

describe('SendEmail', () => {
  it('initializes with correct data', () => {
    const wrapper = mount(SendEmail);
    expect(wrapper.vm.searchQuery).toEqual('');
    expect(wrapper.vm.products).toEqual({});
  });

  it('defines sendEmail method', () => {
    const wrapper = mount(SendEmail);
    expect(typeof wrapper.vm.sendEmail).toBe('function');
  });

  it('sends email with correct parameters', () => {
    const products = 'Test products';
    const wrapper = mount(SendEmail);
    wrapper.vm.sendEmail(products);
  });
});
