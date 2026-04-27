import { LitElement, html, css } from "lit";

export class NittanyIceNewsCard extends LitElement {

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
      css`
        :host {
          display: block;
        }

        .card {
          background: var(--wtra-surface);
          border: 1px solid var(--wtra-border);
          border-radius: var(--wtra-radius);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--wtra-shadow);
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--wtra-accent);
        }

        .media {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--wtra-surface-alt);
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
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .meta {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 0.74rem;
          color: var(--wtra-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 600;
        }

        .meta .cat {
          color: var(--wtra-accent);
          font-weight: 700;
        }

        h3 {
          font-family: var(--wtra-font-display);
          margin: 0;
          font-size: 1.18rem;
          line-height: 1.3;
          font-weight: 600;
          color: var(--wtra-text);
          letter-spacing: -0.005em;
        }

        p {
          margin: 0;
          color: var(--wtra-text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          flex: 1;
        }

        a {
          color: var(--wtra-accent);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.82rem;
          margin-top: 6px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        a:hover {
          color: var(--wtra-accent-2);
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