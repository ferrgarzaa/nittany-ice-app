import { LitElement, html, css } from "lit";
import "./nittany-ice-menu.js";

export class NittanyIceHeader extends LitElement {

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
      css`
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--wtra-bg);
          border-bottom: 1px solid var(--wtra-border);
        }

        header {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 24px;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          padding: 0;
          color: var(--wtra-text);
          cursor: pointer;
          font-family: inherit;
        }

        .mark {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--wtra-purple-deep), var(--wtra-green-deep));
          display: grid;
          place-items: center;
          color: var(--wtra-cream);
          font-family: var(--wtra-font-display);
          font-weight: 700;
          font-size: 1.05rem;
          flex-shrink: 0;
          box-shadow: inset 0 0 0 2px rgba(245, 239, 224, 0.15);
        }

        .name {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
          text-align: left;
        }

        .name strong {
          font-family: var(--wtra-font-display);
          font-size: 1.08rem;
          font-weight: 700;
          letter-spacing: 0.005em;
          color: var(--wtra-text);
        }

        .name span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--wtra-text-muted);
          margin-top: 3px;
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