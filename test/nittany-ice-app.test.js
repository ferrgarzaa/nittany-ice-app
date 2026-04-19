import { html, fixture, expect } from '@open-wc/testing';
import "../nittany-ice-app.js";

describe("NittanyIceApp test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nittany-ice-app
        title="title"
      ></nittany-ice-app>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
