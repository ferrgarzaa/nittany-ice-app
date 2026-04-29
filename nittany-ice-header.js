import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./nittany-ice-menu.js";

export class NittanyIceHeader extends DDD {

  static get tag() {
    return "nittany-ice-header";
  }

  constructor() {
    super();
    this.title = "Wildhorn TRA";
    this.subtitle = "Trail Running Association";
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: white;
          border-bottom: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        header {
          max-width: 1100px;
          margin: 0 auto;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-coalyGray);
        }

        .mark {
          width: 40px;
          height: 40px;
          background-color: var(--ddd-theme-default-original87Pink);
          color: white;
          border-radius: var(--ddd-radius-circle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-s);
        }

        .name {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .name strong {
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
        }

        .name span {
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 540px) {
          .name span {
            display: none;
          }
        }
      `
    ];
  }

  _goHome(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page: "home" }
    }));
  }

  render() {
    return html`
      <header>
        <button class="brand" @click=${this._goHome} aria-label="Go to home">
          <span class="mark">W</span>
          <span class="name">
            <strong>${this.title}</strong>
            <span>${this.subtitle}</span>
          </span>
        </button>
        <nittany-ice-menu></nittany-ice-menu>
      </header>
    `;
  }
}

globalThis.customElements.define(NittanyIceHeader.tag, NittanyIceHeader);