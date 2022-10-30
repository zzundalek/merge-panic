import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

Deno.test({
  name: "a test test case",
  fn() {
    const someCondition = true;
    assertEquals(true, someCondition);
  },
});
