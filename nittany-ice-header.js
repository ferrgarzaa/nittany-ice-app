/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import "./nittany-ice-menu.js";

/**
 * `nittany-ice-header`
 * 
 * @demo index.html
 * @element nittany-ice-header
 */
export class NittanyIceHeader extends LitElement {

  static get tag() {
    return "nittany-ice-header";
  }

  constructor() {
    super();
    this.title = "Nittany Valley Ice Academy";
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          background: #10233a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .brand {
          font-size: 1.2rem;
          font-weight: 700;
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <div class="brand">${this.title}</div>
        <nittany-ice-menu></nittany-ice-menu>
      </header>
    `;
  }
}

globalThis.customElements.define(NittanyIceHeader.tag, NittanyIceHeader);