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
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(4);
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(6);
  });

  //  skip tests by using it.skip(...)
  //  we can ignore the whole suite by using describe.skip(...)
  //  Some examples are here: https://codewithhugo.com/run-skip-single-jest-test/
  it.skip('this is skipped', () => {
    const instance = wrapper(HelloWorld);
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(2);
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(4);
    instance.vm.increment(2);
    expect(instance.vm.$data.counter).toBe(6);
  });
});
