/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-footer`
 * 
 * @demo index.html
 * @element nittany-ice-footer
 */
export class NittanyIceFooter extends LitElement {

  static get tag() {
    return "nittany-ice-footer";
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
          padding: 24px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          color: #d6e2f0;
          background: #0b1726;
        }

        footer {
          max-width: 800px;
          margin: 0 auto;
          font-size: 0.9rem;
        }
      `
    ];
  }

  render() {
    return html`
      <footer>
        Nittany Valley Ice Academy · Project 2 prototype · Penn State IST
      </footer>
    `;
  }
}

globalThis.customElements.define(NittanyIceFooter.tag, NittanyIceFooter);