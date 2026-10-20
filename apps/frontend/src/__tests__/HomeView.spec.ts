import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

// mock 掉真实 HTTP 请求（jsdom 环境无后端）
vi.mock('@/api/client', () => ({
  fetchHealth: vi.fn().mockResolvedValue({ status: 'ok', version: '0.1.0' }),
}));

const { default: HomeView } = await import('@/views/HomeView.vue');
const { useCounterStore } = await import('@/stores/counter');

describe('HomeView', () => {
  it('increments counter via pinia store', async () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const wrapper = mount(HomeView, { global: { plugins: [pinia] } });

    const store = useCounterStore();
    expect(store.count).toBe(0);

    await wrapper.find('[data-testid="increment"]').trigger('click');
    expect(store.count).toBe(1);
    expect(wrapper.find('[data-testid="count"]').text()).toContain('count = 1');
  });
});
