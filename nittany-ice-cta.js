import { LitElement, html, css } from "lit";

export class NittanyIceCta extends LitElement {

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
      css`
        :host {
          display: block;
          padding: 32px 24px 72px;
        }

        .panel {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, var(--wtra-purple-deep), var(--wtra-green-deep));
          color: var(--wtra-cream);
          border-radius: 24px;
          padding: 60px 52px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--wtra-shadow);
        }

        .panel::before {
          content: "";
          position: absolute;
          right: -90px;
          top: -90px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(245, 239, 224, 0.18), transparent 65%);
          pointer-events: none;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--wtra-beige);
          margin-bottom: 12px;
        }

        h2 {
          font-family: var(--wtra-font-display);
          font-size: clamp(1.8rem, 3.2vw, 2.4rem);
          margin: 0 0 14px;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: -0.012em;
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
          gap: 10px;
        }

        a {
          text-decoration: none;
          text-align: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.96rem;
          cursor: pointer;
          font-family: inherit;
          display: block;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .primary {
          background: var(--wtra-cream);
          color: var(--wtra-purple-deep);
        }

        .primary:hover {
          background: #FFFFFF;
          transform: translateY(-1px);
        }

        .secondary {
          background: transparent;
          color: var(--wtra-cream);
          border: 1px solid rgba(245, 239, 224, 0.4);
        }

        .secondary:hover {
          background: rgba(245, 239, 224, 0.12);
        }

        @media (max-width: 760px) {
          .panel {
            grid-template-columns: 1fr;
            padding: 44px 28px;
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