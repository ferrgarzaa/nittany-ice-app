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
      ...super.properties,
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
        }

        .card {
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--ddd-boxShadow-sm);
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--ddd-theme-default-beaverBlue);
        }

        .media {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--ddd-theme-default-limestoneMaxLight);
        }

        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .card:hover .media img {
          transform: scale(1.05);
        }

        .body {
          padding: var(--ddd-spacing-5);
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
          flex: 1;
        }

        .meta {
          display: flex;
          gap: var(--ddd-spacing-2);
          align-items: center;
          font-size: var(--ddd-font-size-4xs);
          color: var(--ddd-theme-default-potentialMidnight);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 600;
        }

        .meta .cat {
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: 700;
        }

        h3 {
          font-family: var(--ddd-font-primary);
          margin: 0;
          font-size: var(--ddd-font-size-m);
          line-height: 1.3;
          font-weight: 600;
          color: var(--ddd-theme-default-coalyGray);
        }

        p {
          margin: 0;
          color: var(--ddd-theme-default-potentialMidnight);
          line-height: 1.6;
          font-size: var(--ddd-font-size-xxs);
          flex: 1;
        }

        a {
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: 700;
          text-decoration: none;
          font-size: var(--ddd-font-size-3xs);
          margin-top: var(--ddd-spacing-1);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        a:hover {
          color: var(--ddd-theme-default-nittanyNavy);
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
    return html`
      <div class="media">
        <img src=${this.image} alt=${this.title} loading="lazy" />
      </div>
    `;
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