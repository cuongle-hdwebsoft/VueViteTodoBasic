import { mount, shallowMount } from "@vue/test-utils";
import { describe, it } from "vitest";
import HelloWorld from "../components/HelloWorld.vue";

describe("HelloWorld.spec.js", function () {
  it("it should has $data object", function () {
    const wrapper = shallowMount(HelloWorld, {});

    console.log(wrapper.vm.name);
    console.log(wrapper.vm.age);
    console.log(wrapper.vm);
  });
});
