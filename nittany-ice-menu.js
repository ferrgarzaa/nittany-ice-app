import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceMenu extends DDD {

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
      super.styles,
      css`
        :host {
          display: block;
          position: relative;
          font-family: var(--ddd-font-primary);
        }

        .toggle {
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          color: var(--ddd-theme-default-coalyGray);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-medium);
        }

        .toggle:hover {
          background-color: var(--ddd-theme-default-shrineLight);
        }

        nav {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: var(--ddd-spacing-2);
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-2);
          min-width: 220px;
          display: none;
          flex-direction: column;
        }

        :host([open]) nav {
          display: flex;
        }

        a {
          color: var(--ddd-theme-default-coalyGray);
          text-decoration: none;
          font-size: var(--ddd-font-size-3xs);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-xs);
          display: block;
        }

        a:hover {
          background-color: var(--ddd-theme-default-shrineLight);
          color: var(--ddd-theme-default-original87Pink);
        }

        a.active {
          color: var(--ddd-theme-default-original87Pink);
          font-weight: var(--ddd-font-weight-bold);
        }

        a.cta {
          background-color: var(--ddd-theme-default-original87Pink);
          color: white;
          text-align: center;
          margin-top: var(--ddd-spacing-2);
          font-weight: var(--ddd-font-weight-bold);
        }

        a.cta:hover {
          background-color: var(--ddd-theme-default-coalyGray);
          color: white;
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
            min-width: 0;
            gap: var(--ddd-spacing-1);
          }
          a.cta {
            margin-top: 0;
            margin-left: var(--ddd-spacing-2);
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
      <button class="toggle" @click=${this._toggle} aria-expanded=${this.open}>Menu</button>
      <nav aria-label="Primary">
        ${this.items.map((item) => this._renderItem(item))}
      </nav>
    `;
  }
}

globalThis.customElements.define(NittanyIceMenu.tag, NittanyIceMenu);