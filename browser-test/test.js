describe("@esm-bundle/xstream", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/xstream.js");
  });

  it("can load the System.register bundle", () => {
    return System.import("/base/system/xstream.js");
  });
});
