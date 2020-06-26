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

  it('has local data as a function', () => {
    expect(typeof HelloWorld.data).toBe('function');
  });

  it('has counter initialized to zero', () => {
    const defaultData = HelloWorld.data();
    expect(defaultData.counter).toBe(0);
  });

  //  at mounting
  it('correctly sets the counter when created', () => {
    expect(wrapper(HelloWorld).vm.$data.counter).toBe(0);
  });
});
