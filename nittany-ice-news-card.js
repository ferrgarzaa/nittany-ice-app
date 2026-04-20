/**
 * Copyright 2026 ferrgarzaa
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `nittany-ice-news-card`
 * 
 * @demo index.html
 * @element nittany-ice-news-card
 */
export class NittanyIceNewsCard extends LitElement {

  static get tag() {
    return "nittany-ice-news-card";
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

globalThis.customElements.define(NittanyIceNewsCard.tag, NittanyIceNewsCard);