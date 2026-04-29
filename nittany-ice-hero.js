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
    this.copy = "We are a community of trail runners, coaches, and stewards racing the ridgelines of the Wildhorn region.";
    this.image = "https://i.pinimg.com/736x/91/ae/62/91ae626dba61c220cf4956f8e7115913.jpg";
    this.imagealt = "A trail runner on a mountain ridge";
  }

  static get properties() {
    return {
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
          background-color: var(--ddd-theme-default-shrineMaxLight);
          font-family: var(--ddd-font-primary);
        }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: var(--ddd-spacing-12) var(--ddd-spacing-5);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-8);
          align-items: center;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-original87Pink);
          margin-bottom: var(--ddd-spacing-3);
        }

        h1 {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xxl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
          margin: 0 0 var(--ddd-spacing-4);
          line-height: var(--ddd-lh-110);
        }

        p {
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-default-coalyGray);
          line-height: var(--ddd-lh-150);
          margin: 0 0 var(--ddd-spacing-5);
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
        }

        .btn {
          font-family: var(--ddd-font-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-sm);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-3xs);
          cursor: pointer;
          text-decoration: none;
          border: var(--ddd-border-sm);
          display: inline-block;
        }

        .btn.primary {
          background-color: var(--ddd-theme-default-original87Pink);
          color: white;
          border-color: var(--ddd-theme-default-original87Pink);
        }

        .btn.primary:hover {
          background-color: var(--ddd-theme-default-coalyGray);
          border-color: var(--ddd-theme-default-coalyGray);
        }

        .btn.ghost {
          background-color: transparent;
          color: var(--ddd-theme-default-coalyGray);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        .btn.ghost:hover {
          background-color: white;
        }

        .visual {
          aspect-ratio: 4 / 5;
          border-radius: var(--ddd-radius-md);
          overflow: hidden;
          background-color: var(--ddd-theme-default-shrineLight);
        }

        .visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 760px) {
          .wrap {
            grid-template-columns: 1fr;
            padding: var(--ddd-spacing-8) var(--ddd-spacing-5);
          }
          .visual {
            aspect-ratio: 4 / 3;
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
            <a class="btn ghost" href="?page=schedule" @click=${this._goSchedule}>View schedule</a>
          </div>
        </div>
        <div class="visual">
          <img src=${this.image} alt=${this.imagealt} loading="eager" />
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceHero.tag, NittanyIceHero);