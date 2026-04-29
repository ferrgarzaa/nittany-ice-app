import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceCta extends DDD {

  static get tag() {
    return "nittany-ice-cta";
  }

  constructor() {
    super();
    this.eyebrow = "Membership";
    this.heading = "Find your home on the trail.";
    this.copy = "Join 1,200+ runners across the Wildhorn region. Members get priority race registration, weekly group runs, and a welcome pack.";
    this.primarylabel = "Become a member";
    this.primarypage = "join";
    this.secondarylabel = "Browse races";
    this.secondarypage = "races";
  }

  static get properties() {
    return {
      eyebrow: { type: String },
      heading: { type: String },
      copy: { type: String },
      primarylabel: { type: String },
      primarypage: { type: String },
      secondarylabel: { type: String },
      secondarypage: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-8) var(--ddd-spacing-5);
          font-family: var(--ddd-font-primary);
        }

        .panel {
          max-width: 1000px;
          margin: 0 auto;
          background-color: var(--ddd-theme-default-original87Pink);
          color: white;
          padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
          border-radius: var(--ddd-radius-md);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-2);
          opacity: 0.85;
        }

        h2 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin: 0 0 var(--ddd-spacing-3);
        }

        p {
          font-size: var(--ddd-font-size-s);
          line-height: var(--ddd-lh-150);
          margin: 0 0 var(--ddd-spacing-5);
          max-width: 600px;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
        }

        a {
          text-decoration: none;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-sm);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-3xs);
          font-family: var(--ddd-font-primary);
          border: var(--ddd-border-sm);
        }

        .primary {
          background-color: white;
          color: var(--ddd-theme-default-original87Pink);
          border-color: white;
        }

        .primary:hover {
          background-color: var(--ddd-theme-default-shrineLight);
        }

        .secondary {
          background-color: transparent;
          color: white;
          border-color: white;
        }

        .secondary:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
      `
    ];
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page }
    }));
  }

  _goPrimary(e) {
    e.preventDefault();
    this._navigate(this.primarypage);
  }

  _goSecondary(e) {
    e.preventDefault();
    this._navigate(this.secondarypage);
  }

  render() {
    const primaryHref = `?page=${this.primarypage}`;
    const secondaryHref = `?page=${this.secondarypage}`;
    return html`
      <section class="panel">
        <div class="eyebrow">${this.eyebrow}</div>
        <h2>${this.heading}</h2>
        <p>${this.copy}</p>
        <div class="buttons">
          <a class="primary" href=${primaryHref} @click=${this._goPrimary}>${this.primarylabel}</a>
          <a class="secondary" href=${secondaryHref} @click=${this._goSecondary}>${this.secondarylabel}</a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(NittanyIceCta.tag, NittanyIceCta);