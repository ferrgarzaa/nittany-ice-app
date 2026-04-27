import { LitElement, html, css } from "lit";

export class NittanyIceMenu extends LitElement {

  static get tag() {
    return "nittany-ice-menu";
  }

  constructor() {
    super();
    this.open = false;
    this.items = this._fallbackItems();
    this.currentPage = this._getPage();
    window.addEventListener("popstate", () => {
      this.currentPage = this._getPage();
    });
  }

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      items: { type: Array },
      currentPage: { type: String },
    };
  }

  _getPage() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  }

  async firstUpdated() {
    try {
      const res = await fetch("/api/menu");
      if (res.ok) {
        const data = await res.json();
        if (data && data.items && data.items.length) {
          this.items = data.items;
        }
      }
    } catch (e) {}
  }

  _fallbackItems() {
    return [
      { label: "Home", page: "home" },
      { label: "Races", page: "races" },
      { label: "Training", page: "training" },
      { label: "Schedule", page: "schedule" },
      { label: "Youth & Parents", page: "parent-info" },
      { label: "About", page: "about" },
      { label: "Contact", page: "contact" },
      { label: "Join", page: "join", cta: true }
    ];
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
        }

        .toggle {
          background: transparent;
          border: 1px solid var(--wtra-border);
          color: var(--wtra-text);
          padding: 9px 14px;
          border-radius: 999px;
          cursor: pointer;
          font: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .toggle:hover {
          background: var(--wtra-surface-alt);
          border-color: var(--wtra-accent);
        }

        .bars {
          display: inline-flex;
          flex-direction: column;
          gap: 3px;
        }

        .bars span {
          width: 16px;
          height: 2px;
          background: var(--wtra-text);
          border-radius: 2px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        :host([open]) .bars span:nth-child(1) {
          transform: translateY(5px) rotate(45deg);
        }

        :host([open]) .bars span:nth-child(2) {
          opacity: 0;
        }

        :host([open]) .bars span:nth-child(3) {
          transform: translateY(-5px) rotate(-45deg);
        }

        nav {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 12px;
          background: var(--wtra-surface);
          border: 1px solid var(--wtra-border);
          border-radius: var(--wtra-radius);
          box-shadow: var(--wtra-shadow);
          padding: 10px;
          min-width: 240px;
          display: none;
          flex-direction: column;
          gap: 2px;
        }

        :host([open]) nav {
          display: flex;
        }

        a {
          color: var(--wtra-text);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 10px 14px;
          border-radius: 10px;
          display: block;
          transition: background 0.15s ease, color 0.15s ease;
        }

        a:hover {
          background: var(--wtra-surface-alt);
          color: var(--wtra-accent);
        }

        a.active {
          background: var(--wtra-surface-alt);
          color: var(--wtra-accent);
          font-weight: 600;
        }

        a.cta {
          background: var(--wtra-accent);
          color: var(--wtra-cream);
          margin-top: 6px;
          text-align: center;
          font-weight: 600;
        }

        a.cta:hover {
          background: var(--wtra-purple);
          color: var(--wtra-cream);
        }

        @media (min-width: 920px) {
          .toggle {
            display: none;
          }
          nav {
            position: static;
            display: flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
            background: transparent;
            border: none;
            box-shadow: none;
            gap: 4px;
            align-items: center;
            min-width: 0;
          }
          a {
            padding: 8px 12px;
          }
          a.cta {
            margin-top: 0;
            margin-left: 6px;
            padding: 9px 18px;
            border-radius: 999px;
          }
        }
      `
    ];
  }

  _toggle() {
    this.open = !this.open;
  }

  _navigate(e, page) {
    e.preventDefault();
    this.open = false;
    this.currentPage = page;
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page }
    }));
  }

  _hrefFor(page) {
    if (page === "home") {
      return "?";
    }
    return `?page=${page}`;
  }

  _classFor(item) {
    if (item.cta) {
      return "cta";
    }
    if (this.currentPage === item.page) {
      return "active";
    }
    return "";
  }

  _renderItem(item) {
    const href = this._hrefFor(item.page);
    const cls = this._classFor(item);
    const onClick = (e) => this._navigate(e, item.page);
    return html`<a href=${href} class=${cls} @click=${onClick}>${item.label}</a>`;
  }

  render() {
    return html`
      <button
        class="toggle"
        @click=${this._toggle}
        aria-expanded=${this.open}
        aria-label="Toggle menu"
      >
        <span class="bars" aria-hidden="true"><span></span><span></span><span></span></span>
        Menu
      </button>
      <nav id="wtra-menu" aria-label="Primary">
        ${this.items.map((item) => this._renderItem(item))}
      </nav>
    `;
  }
}

globalThis.customElements.define(NittanyIceMenu.tag, NittanyIceMenu);