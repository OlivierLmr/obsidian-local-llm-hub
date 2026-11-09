import { describe, it, expect } from "vitest";
import { reasoningDelta } from "./localLlmProvider";

describe("reasoningDelta", () => {
  it("reads reasoning_content (LM Studio / vLLM)", () => {
    expect(reasoningDelta({ reasoning_content: "hmm" })).toBe("hmm");
  });

  it("reads reasoning (mlx_lm.server)", () => {
    expect(reasoningDelta({ reasoning: "hmm" })).toBe("hmm");
  });

  it("returns undefined when there is no thinking text", () => {
    expect(reasoningDelta({})).toBeUndefined();
    expect(reasoningDelta({ reasoning: "" })).toBeUndefined();
    expect(reasoningDelta(undefined)).toBeUndefined();
  });
});
