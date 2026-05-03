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
      ...super.properties,
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
    } catch (e) {
      // keep fallback items
    }
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
        }

        .toggle {
          background: transparent;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          color: var(--ddd-theme-default-coalyGray);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-rounded);
          cursor: pointer;
          font: inherit;
          font-size: var(--ddd-font-size-xxs);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }

        .toggle:hover {
          background: var(--ddd-theme-default-limestoneMaxLight);
          border-color: var(--ddd-theme-default-beaverBlue);
        }

        .bars {
          display: inline-flex;
          flex-direction: column;
          gap: 3px;
        }

        .bars span {
          width: 16px;
          height: 2px;
          background: var(--ddd-theme-default-coalyGray);
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
          margin-top: var(--ddd-spacing-3);
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-2);
          min-width: 240px;
          display: none;
          flex-direction: column;
          gap: 2px;
        }

        :host([open]) nav {
          display: flex;
        }

        a {
          color: var(--ddd-theme-default-coalyGray);
          text-decoration: none;
          font-size: var(--ddd-font-size-xxs);
          font-weight: 500;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-xs);
          display: block;
          transition: background 0.15s ease, color 0.15s ease;
        }

        a:hover {
          background: var(--ddd-theme-default-limestoneMaxLight);
          color: var(--ddd-theme-default-beaverBlue);
        }

        a.active {
          background: var(--ddd-theme-default-limestoneMaxLight);
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: 600;
        }

        a.cta {
          background: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-shrineMaxLight);
          margin-top: var(--ddd-spacing-2);
          text-align: center;
          font-weight: 600;
        }

        a.cta:hover {
          background: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-shrineMaxLight);
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
            gap: var(--ddd-spacing-1);
            align-items: center;
            min-width: 0;
          }
          a {
            padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          }
          a.cta {
            margin-top: 0;
            margin-left: var(--ddd-spacing-2);
            padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
            border-radius: var(--ddd-radius-rounded);
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