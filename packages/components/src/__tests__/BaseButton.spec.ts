import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton', () => {
  it('renders slot content and emits click', async () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Click me' } });
    expect(wrapper.text()).toContain('Click me');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('applies variant class', () => {
    const wrapper = mount(BaseButton, { props: { variant: 'secondary' } });
    expect(wrapper.classes()).toContain('base-button--secondary');
  });
});
