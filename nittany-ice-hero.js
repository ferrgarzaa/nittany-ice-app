/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-hero`
 * 
 * @demo index.html
 * @element nittany-ice-hero
 */
export class NittanyIceHero extends LitElement {

  static get tag() {
    return "nittany-ice-hero";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 56px 24px;
          background: linear-gradient(180deg, #163354 0%, #0b1726 100%);
          text-align: center;
        }

        h1 {
          margin: 0 0 12px;
          font-size: 2.4rem;
        }

        p {
          max-width: 700px;
          margin: 0 auto;
          color: #d6e2f0;
          line-height: 1.5;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>Modern youth hockey for athletes and families</h1>
        <p>
          Building confidence, skills, teamwork, and community through a stronger
          sports association experience.
        </p>
      </section>
    `;
  }
}

globalThis.customElements.define(NittanyIceHero.tag, NittanyIceHero);