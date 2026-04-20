/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-menu`
 * 
 * @demo index.html
 * @element nittany-ice-menu
 */
export class NittanyIceMenu extends LitElement {

  static get tag() {
    return "nittany-ice-menu";
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
        }

        nav {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
        }
      `
    ];
  }

  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/programs">Programs</a>
        <a href="/schedule">Schedule</a>
      </nav>
    `;
  }
}

globalThis.customElements.define(NittanyIceMenu.tag, NittanyIceMenu);