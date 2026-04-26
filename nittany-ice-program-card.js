import { LitElement, html, css } from "lit";

export class NittanyIceProgramCard extends LitElement {
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
    return css`
      :host {
        display: block;
      }

      .card {
        background: var(--wtra-surface);
        border: 1px solid var(--wtra-border);
        border-radius: var(--wtra-radius);
        padding: 28px 26px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        box-shadow: var(--wtra-shadow);
        transition: transform 0.18s ease, border-color 0.18s ease;
      }

      .card:hover {
        transform: translateY(-3px);
        border-color: var(--wtra-accent);
      }

      .icon {
        width: 46px;
        height: 46px;
        display: grid;
        place-items: center;
        background: var(--wtra-surface-alt);
        border-radius: 12px;
        font-size: 1.35rem;
        color: var(--wtra-accent);
      }

      h3 {
        font-family: var(--wtra-font-display);
        margin: 4px 0 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--wtra-text);
        letter-spacing: -0.005em;
      }

      p {
        margin: 0;
        color: var(--wtra-text-muted);
        line-height: 1.6;
        flex: 1;
      }

      a {
        color: var(--wtra-accent);
        text-decoration: none;
        font-weight: 700;
        font-size: 0.92rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      a:hover {
        color: var(--wtra-accent-2);
      }

      a span {
        transition: transform 0.18s ease;
      }

      a:hover span {
        transform: translateX(4px);
      }
    `;
  }

  _go(e) {
    if (!this.link) return;
    const m = this.link.match(/[?&]page=([^&]+)/);
    if (m) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent("wtra-navigate", {
        bubbles: true,
        composed: true,
        detail: { page: m[1] }
      }));
    }
  }

  render() {
    return html`
      <article class="card">
        ${this.icon ? html`<div class="icon" aria-hidden="true">${this.icon}</div>` : ""}
        <h3>${this.title}</h3>
        <p>${this.text}</p>
        ${this.link ? html`<a href="${this.link}" @click="${this._go}">${this.linktext} <span aria-hidden="true">→</span></a>` : ""}
      </article>
    `;
  }
}

customElements.define("nittany-ice-program-card", NittanyIceProgramCard);