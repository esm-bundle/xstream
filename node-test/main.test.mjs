describe("@esm-bundle/xstream", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/xstream.js");
  });
});
