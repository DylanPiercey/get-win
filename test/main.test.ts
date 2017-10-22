import * as assert from "assert";
import { get } from "../src";

describe("get-win", () => {
  it("should return the global object", () => {
    assert.equal(get(), global);
  });
});
