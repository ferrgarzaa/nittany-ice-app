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
    this.copy = "Join 1,200+ runners across the Wildhorn region. Members get priority race registration, weekly group runs, training plan discounts, and a welcome pack.";
    this.primarylabel = "Become a member";
    this.primarypage = "join";
    this.secondarylabel = "Browse races";
    this.secondarypage = "races";
  }

  static get properties() {
    return {
      ...super.properties,
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
          padding: var(--ddd-spacing-8) var(--ddd-spacing-6) var(--ddd-spacing-18);
        }

        .panel {
          max-width: 1100px;
          margin: 0 auto;
          background: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-shrineMaxLight);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-15) var(--ddd-spacing-13);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--ddd-spacing-10);
          align-items: center;
          box-shadow: var(--ddd-boxShadow-md);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: var(--ddd-font-size-3xs);
          font-weight: 700;
          color: var(--ddd-theme-default-shrineLight);
          margin-bottom: var(--ddd-spacing-3);
        }

        h2 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-l);
          margin: 0 0 var(--ddd-spacing-3);
          line-height: 1.1;
          font-weight: 600;
        }

        p {
          margin: 0;
          line-height: 1.65;
          opacity: 0.92;
          max-width: 520px;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }

        a {
          text-decoration: none;
          text-align: center;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-rounded);
          font-weight: 600;
          font-size: var(--ddd-font-size-xxs);
          cursor: pointer;
          font-family: inherit;
          display: block;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .primary {
          background: var(--ddd-theme-default-shrineMaxLight);
          color: var(--ddd-theme-default-nittanyNavy);
        }

        .primary:hover {
          background: var(--ddd-theme-default-white);
          transform: translateY(-1px);
        }

        .secondary {
          background: transparent;
          color: var(--ddd-theme-default-shrineMaxLight);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-shrineLight);
        }

        .secondary:hover {
          background: rgba(245, 239, 224, 0.12);
        }

        @media (max-width: 760px) {
          .panel {
            grid-template-columns: 1fr;
            padding: var(--ddd-spacing-10) var(--ddd-spacing-7);
          }
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
        <div>
          <div class="eyebrow">${this.eyebrow}</div>
          <h2>${this.heading}</h2>
          <p>${this.copy}</p>
        </div>
        <div class="buttons">
          <a class="primary" href=${primaryHref} @click=${this._goPrimary}>${this.primarylabel}</a>
          <a class="secondary" href=${secondaryHref} @click=${this._goSecondary}>${this.secondarylabel}</a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(NittanyIceCta.tag, NittanyIceCta);