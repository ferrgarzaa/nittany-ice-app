/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-stat-band`
 * 
 * @demo index.html
 * @element nittany-ice-stat-band
 */
export class NittanyIceStatBand extends LitElement {

  static get tag() {
    return "nittany-ice-stat-band";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
    css`
      :host {
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
  <slot></slot>
  `;
  }

}

globalThis.customElements.define(NittanyIceStatBand.tag, NittanyIceStatBand);