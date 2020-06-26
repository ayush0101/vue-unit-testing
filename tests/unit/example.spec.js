import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const wrapper = (component, propsData) => {
  return shallowMount(component, {
    propsData,
  });
};

describe('HelloWorld.vue', () => {
  it('has counter initialized to zero', () => {
    const defaultData = HelloWorld.data();
    expect(defaultData.counter).toBe(0);
  });

  //  at mounting
  it('correctly sets the counter when created', () => {
    expect(wrapper(HelloWorld).vm.$data.counter).toBe(0);
  });

  //  method invocation
  it('correctly increments the counter when called', () => {
    const instance = wrapper(HelloWorld);
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(2);
  });
});
