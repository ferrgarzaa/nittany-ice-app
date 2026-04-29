import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceNewsCard extends DDD {

  static get tag() {
    return "nittany-ice-news-card";
  }

  constructor() {
    super();
    this.category = "";
    this.date = "";
    this.title = "";
    this.excerpt = "";
    this.image = "";
    this.link = "";
  }

  static get properties() {
    return {
      category: { type: String },
      date: { type: String },
      title: { type: String },
      excerpt: { type: String },
      image: { type: String },
      link: { type: String },
    };
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
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .media {
          aspect-ratio: 16 / 10;
          background-color: var(--ddd-theme-default-shrineLight);
        }

        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .body {
          padding: var(--ddd-spacing-4);
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
          flex: 1;
        }

        .meta {
          display: flex;
          gap: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta .cat {
          color: var(--ddd-theme-default-original87Pink);
          font-weight: var(--ddd-font-weight-bold);
        }

        h3 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-ms);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
          margin: 0;
          line-height: var(--ddd-lh-120);
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

  _renderMedia() {
    if (!this.image) {
      return null;
    }
    return html`<div class="media"><img src=${this.image} alt=${this.title} loading="lazy" /></div>`;
  }

  _renderCategory() {
    if (!this.category) {
      return null;
    }
    return html`<span class="cat">${this.category}</span>`;
  }

  _renderDate() {
    if (!this.date) {
      return null;
    }
    return html`<span>${this.date}</span>`;
  }

  _renderLink() {
    if (!this.link) {
      return null;
    }
    return html`<a href=${this.link} @click=${this._onLinkClick}>Read more →</a>`;
  }

  render() {
    return html`
      <article class="card">
        ${this._renderMedia()}
        <div class="body">
          <div class="meta">
            ${this._renderCategory()}
            ${this._renderDate()}
          </div>
          <h3>${this.title}</h3>
          <p>${this.excerpt}</p>
          ${this._renderLink()}
        </div>
      </article>
    `;
  }
}

globalThis.customElements.define(NittanyIceNewsCard.tag, NittanyIceNewsCard);