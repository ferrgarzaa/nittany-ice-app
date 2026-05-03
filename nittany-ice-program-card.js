import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceProgramCard extends DDD {

  static get tag() {
    return "nittany-ice-program-card";
  }

  static get properties() {
    return {
      ...super.properties,
      icon: { type: String },
      title: { type: String },
      text: { type: String },
      link: { type: String },
      linktext: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = "";
    this.title = "";
    this.text = "";
    this.link = "";
    this.linktext = "Learn more";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }

        .card {
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-7) var(--ddd-spacing-6);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
          box-shadow: var(--ddd-boxShadow-sm);
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--ddd-theme-default-beaverBlue);
        }

        .icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: var(--ddd-theme-default-limestoneMaxLight);
          border-radius: var(--ddd-radius-xs);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-beaverBlue);
        }

        h3 {
          font-family: var(--ddd-font-primary);
          margin: var(--ddd-spacing-1) 0 0;
          font-size: var(--ddd-font-size-m);
          font-weight: 600;
          color: var(--ddd-theme-default-coalyGray);
        }

        p {
          margin: 0;
          color: var(--ddd-theme-default-potentialMidnight);
          line-height: 1.6;
          flex: 1;
        }

        a {
          color: var(--ddd-theme-default-beaverBlue);
          text-decoration: none;
          font-weight: 700;
          font-size: var(--ddd-font-size-3xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-1);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        a:hover {
          color: var(--ddd-theme-default-nittanyNavy);
        }

        a span {
          transition: transform 0.18s ease;
        }

        a:hover span {
          transform: translateX(4px);
        }
      `
    ];
  }

  _pageFromLink() {
    if (!this.link) {
      return null;
    }
    const match = this.link.match(/[?&]page=([^&]+)/);
    if (match) {
      return match[1];
    }
    return null;
  }

  _onLinkClick(e) {
    const page = this._pageFromLink();
    if (page) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent("wtra-navigate", {
        bubbles: true,
        composed: true,
        detail: { page }
      }));
    }
  }

  _renderIcon() {
    if (!this.icon) {
      return null;
    }
    return html`<div class="icon" aria-hidden="true">${this.icon}</div>`;
  }

  _renderLink() {
    if (!this.link) {
      return null;
    }
    return html`<a href=${this.link} @click=${this._onLinkClick}>${this.linktext} <span aria-hidden="true">→</span></a>`;
  }

  render() {
    return html`
      <article class="card">
        ${this._renderIcon()}
        <h3>${this.title}</h3>
        <p>${this.text}</p>
        ${this._renderLink()}
      </article>
    `;
  }
}

globalThis.customElements.define(NittanyIceProgramCard.tag, NittanyIceProgramCard);