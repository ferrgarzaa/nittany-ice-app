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
      ...super.properties,
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
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--ddd-theme-default-shrineMaxLight);
          border-bottom: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        header {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          gap: var(--ddd-spacing-4);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          background: none;
          border: none;
          padding: 0;
          color: var(--ddd-theme-default-coalyGray);
          cursor: pointer;
          font-family: var(--ddd-font-primary);
        }

        .mark {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--ddd-theme-default-nittanyNavy);
          display: grid;
          place-items: center;
          color: var(--ddd-theme-default-shrineMaxLight);
          font-family: var(--ddd-font-primary);
          font-weight: 700;
          font-size: var(--ddd-font-size-s);
          flex-shrink: 0;
        }

        .name {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
          text-align: left;
        }

        .name strong {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          font-weight: 700;
          color: var(--ddd-theme-default-coalyGray);
        }

        .name span {
          font-size: var(--ddd-font-size-4xs);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ddd-theme-default-potentialMidnight);
          margin-top: var(--ddd-spacing-1);
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
        <button class="brand" @click=${this._goHome} aria-label="Wildhorn TRA home">
          <span class="mark" aria-hidden="true">W</span>
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