import { LitElement, html, css } from "lit";

import "./nittany-ice-header.js";
import "./nittany-ice-hero.js";
import "./nittany-ice-cta.js";
import "./nittany-ice-footer.js";

export class NittanyIceApp extends LitElement {
  static get tag() {
    return "nittany-ice-app";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
        background: #0b1726;
        color: white;
        font-family: Arial, sans-serif;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `;
  }

  render() {
    return html`
      <main>
        <nittany-ice-header></nittany-ice-header>
        <nittany-ice-hero></nittany-ice-hero>
        <nittany-ice-cta></nittany-ice-cta>
        <nittany-ice-footer></nittany-ice-footer>
      </main>
    `;
  }
}

customElements.define("nittany-ice-app", NittanyIceApp);
