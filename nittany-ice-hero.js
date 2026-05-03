import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceHero extends DDD {

  static get tag() {
    return "nittany-ice-hero";
  }

  constructor() {
    super();
    this.eyebrow = "Trail Running Association";
    this.heading = "Run wild. Run free. Run together.";
    this.copy = "We are a community of trail runners, coaches, and stewards racing the ridgelines of the Wildhorn region — and protecting them, mile by mile.";
    this.image = "https://i.pinimg.com/736x/91/ae/62/91ae626dba61c220cf4956f8e7115913.jpg";
    this.imagealt = "A trail runner ascending a mountain ridge at sunrise";
  }

  static get properties() {
    return {
      ...super.properties,
      eyebrow: { type: String },
      heading: { type: String },
      copy: { type: String },
      image: { type: String },
      imagealt: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          position: relative;
          overflow: hidden;
          background: var(--ddd-theme-default-shrineMaxLight);
        }

        .wrap {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          padding: var(--ddd-spacing-24) var(--ddd-spacing-6) var(--ddd-spacing-28);
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          align-items: center;
          gap: var(--ddd-spacing-14);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: 700;
          margin-bottom: var(--ddd-spacing-4);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }

        .eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--ddd-theme-default-beaverBlue);
          display: inline-block;
        }

        h1 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xl);
          line-height: 1.04;
          margin: 0 0 var(--ddd-spacing-5);
          color: var(--ddd-theme-default-coalyGray);
          font-weight: 600;
        }

        p {
          max-width: 540px;
          color: var(--ddd-theme-default-potentialMidnight);
          font-size: var(--ddd-font-size-s);
          line-height: 1.65;
          margin: 0 0 var(--ddd-spacing-7);
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
        }

        .btn {
          font-family: inherit;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-rounded);
          font-weight: 600;
          font-size: var(--ddd-font-size-xxs);
          cursor: pointer;
          border: var(--ddd-border-sm);
          border-color: transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .btn.primary {
          background: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-shrineMaxLight);
        }

        .btn.primary:hover {
          background: var(--ddd-theme-default-beaverBlue);
          transform: translateY(-1px);
        }

        .btn.ghost {
          background: transparent;
          color: var(--ddd-theme-default-coalyGray);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        .btn.ghost:hover {
          background: var(--ddd-theme-default-limestoneMaxLight);
          border-color: var(--ddd-theme-default-beaverBlue);
        }

        .visual {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: var(--ddd-radius-md);
          overflow: hidden;
          background: var(--ddd-theme-default-nittanyNavy);
          box-shadow: var(--ddd-boxShadow-md);
        }

        .visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .badge {
          position: absolute;
          top: var(--ddd-spacing-4);
          left: var(--ddd-spacing-4);
          background: var(--ddd-theme-default-shrineMaxLight);
          color: var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-rounded);
          font-size: var(--ddd-font-size-4xs);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .floater {
          position: absolute;
          bottom: var(--ddd-spacing-5);
          left: var(--ddd-spacing-5);
          right: var(--ddd-spacing-5);
          background: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-shrineMaxLight);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-sm);
          display: flex;
          gap: var(--ddd-spacing-3);
          align-items: center;
          font-size: var(--ddd-font-size-xxs);
        }

        .floater strong {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }

        .floater span {
          opacity: 0.86;
        }

        @media (max-width: 880px) {
          .wrap {
            grid-template-columns: 1fr;
            padding: var(--ddd-spacing-16) var(--ddd-spacing-6) var(--ddd-spacing-18);
            gap: var(--ddd-spacing-9);
          }
          .visual {
            aspect-ratio: 4 / 3;
            max-height: 460px;
          }
        }
      `
    ];
  }

  _goJoin(e) {
    e.preventDefault();
    this._navigate("join");
  }

  _goSchedule(e) {
    e.preventDefault();
    this._navigate("schedule");
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page }
    }));
  }

  render() {
    return html`
      <div class="wrap">
        <div>
          <div class="eyebrow">${this.eyebrow}</div>
          <h1>${this.heading}</h1>
          <p>${this.copy}</p>
          <div class="actions">
            <a class="btn primary" href="?page=join" @click=${this._goJoin}>Become a member</a>
            <a class="btn ghost" href="?page=schedule" @click=${this._goSchedule}>View race schedule</a>
          </div>
        </div>
        <div class="visual">
          <span class="badge">2026 Season</span>
          <img src=${this.image} alt=${this.imagealt} loading="eager" />
          <div class="floater">
            <div>
              <strong>Spring Wildflower 25K</strong>
              <span>May 2 · Cedar Hollow · Registration open</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceHero.tag, NittanyIceHero);