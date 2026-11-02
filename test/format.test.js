import test from "node:test";
import assert from "node:assert/strict";
import { formatTask } from "../src/format.js";

test("trims the title", () => {
  assert.equal(formatTask("  Write release notes  ", "user1"), "Write release notes (user1)");
});

test("defaults owner to unassigned", () => {
  assert.equal(formatTask("Update checklist"), "Update checklist (unassigned)");
});

test("throws on an empty title", () => {
  assert.throws(() => formatTask("   ", "user2"), {
    message: "Task title is required",
  });
});
