import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const wrapper = (component, propsData) => {
  return shallowMount(component, {
    propsData,
  });
};

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    expect(wrapper(HelloWorld, { msg }).text()).toMatch(msg);
  });
});
