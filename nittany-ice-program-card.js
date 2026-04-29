import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceProgramCard extends DDD {

  static get tag() {
    return "nittany-ice-program-card";
  }

  static get properties() {
    return {
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
          font-family: var(--ddd-font-primary);
        }

        .card {
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-5);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }

        .icon {
          width: 40px;
          height: 40px;
          background-color: var(--ddd-theme-default-shrineLight);
          color: var(--ddd-theme-default-original87Pink);
          border-radius: var(--ddd-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-s);
        }

        h3 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-ms);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
          margin: 0;
        }

        p {
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          line-height: var(--ddd-lh-150);
          margin: 0;
          flex: 1;
        }

        a {
          color: var(--ddd-theme-default-original87Pink);
          text-decoration: none;
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        a:hover {
          text-decoration: underline;
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
    return html`<div class="icon">${this.icon}</div>`;
  }

  _renderLink() {
    if (!this.link) {
      return null;
    }
    return html`<a href=${this.link} @click=${this._onLinkClick}>${this.linktext} →</a>`;
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