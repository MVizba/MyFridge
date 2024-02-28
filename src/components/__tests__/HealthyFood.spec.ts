import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HealthyFood from '@/components/HealthyFood.vue';


describe('HealthyFood', () => {
  it('renders properly', () => {
    const wrapper = mount(HealthyFood);
    expect(wrapper.exists()).toBe(true);
  });

  it('adds product to list on clicked', async () => {
    const wrapper = mount(HealthyFood);
    await wrapper.setData({ searchQuery: 'apple' });
    const addButton = wrapper.find('img');
    await addButton.trigger('click');

    const shoppingLists = JSON.parse(localStorage.getItem('shoppingLists') || '[]');
    expect(shoppingLists).toContain('Apples');
  });
});