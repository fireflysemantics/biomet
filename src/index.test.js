import { assert, expect, test } from "vitest";
import { sum } from "./index";

test("sum with zero arguments returns 0", () => {
	expect(sum()).toBe(0);
});

test("this test is going to fail", ()=>{
    assert.fail();
})
