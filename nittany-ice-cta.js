/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-cta`
 * 
 * @demo index.html
 * @element nittany-ice-cta
 */
export class NittanyIceCta extends LitElement {

  static get tag() {
    return "nittany-ice-cta";
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
          padding: 0 24px;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        button {
          padding: 12px 18px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .primary {
          background: #7ec8ff;
          color: #0b1726;
        }

        .secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `
    ];
  }

  render() {
    return html`
      <section class="buttons">
        <button class="primary">Register Now</button>
        <button class="secondary">View Programs</button>
      </section>
    `;
  }
}

globalThis.customElements.define(NittanyIceCta.tag, NittanyIceCta);