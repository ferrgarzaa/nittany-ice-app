import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceFooter extends DDD {

  static get tag() {
    return "nittany-ice-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return {
      ...super.properties,
      year: { type: Number },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-shrineMaxLight);
          padding: var(--ddd-spacing-16) var(--ddd-spacing-6) var(--ddd-spacing-7);
          margin-top: var(--ddd-spacing-12);
        }

        .wrap {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: var(--ddd-spacing-10);
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
          max-width: 340px;
        }

        .brand .mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--ddd-theme-default-beaverBlue);
          display: grid;
          place-items: center;
          color: var(--ddd-theme-default-shrineMaxLight);
          font-family: var(--ddd-font-primary);
          font-weight: 700;
          font-size: var(--ddd-font-size-s);
        }

        .brand strong {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-m);
          font-weight: 700;
        }

        .brand p {
          margin: 0;
          color: rgba(245, 239, 224, 0.78);
          line-height: 1.6;
          font-size: var(--ddd-font-size-xxs);
        }

        .col h4 {
          margin: 0 0 var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ddd-theme-default-shrineLight);
          font-weight: 700;
        }

        .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }

        .col a {
          color: rgba(245, 239, 224, 0.85);
          text-decoration: none;
          font-size: var(--ddd-font-size-xxs);
          transition: color 0.15s ease;
        }

        .col a:hover {
          color: var(--ddd-theme-default-shrineMaxLight);
        }

        .bottom {
          max-width: 1240px;
          margin: var(--ddd-spacing-12) auto 0;
          padding-top: var(--ddd-spacing-6);
          border-top: var(--ddd-border-sm);
          border-color: rgba(245, 239, 224, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-3xs);
          color: rgba(245, 239, 224, 0.65);
        }

        .bottom .meta {
          display: flex;
          gap: var(--ddd-spacing-5);
          flex-wrap: wrap;
        }

        @media (max-width: 880px) {
          .wrap {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 540px) {
          .wrap {
            grid-template-columns: 1fr;
            gap: var(--ddd-spacing-8);
          }
        }
      `
    ];
  }

  _navigate(e, page) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page }
    }));
  }

  _renderLink(label, page) {
    const href = `?page=${page}`;
    const onClick = (e) => this._navigate(e, page);
    return html`<li><a href=${href} @click=${onClick}>${label}</a></li>`;
  }

  render() {
    return html`
      <div class="wrap">
        <div class="brand">
          <div class="mark" aria-hidden="true">W</div>
          <strong>Wildhorn Trail Running Association</strong>
          <p>A nonprofit community of trail runners, coaches, and stewards racing the ridgelines of the Wildhorn region since 2011.</p>
        </div>
        <div class="col">
          <h4>Explore</h4>
          <ul>
            ${this._renderLink("Race calendar", "schedule")}
            ${this._renderLink("Training programs", "training")}
            ${this._renderLink("Youth & parents", "parent-info")}
            ${this._renderLink("Race results", "results")}
          </ul>
        </div>
        <div class="col">
          <h4>Community</h4>
          <ul>
            ${this._renderLink("Become a member", "join")}
            ${this._renderLink("Volunteer", "volunteer")}
            ${this._renderLink("Sponsors", "sponsors")}
            ${this._renderLink("Trail stewardship", "stewardship")}
          </ul>
        </div>
        <div class="col">
          <h4>About</h4>
          <ul>
            ${this._renderLink("Our story", "about")}
            ${this._renderLink("Board of directors", "board")}
            ${this._renderLink("Contact", "contact")}
            ${this._renderLink("News", "news")}
          </ul>
        </div>
      </div>
      <div class="bottom">
        <span>© ${this.year} Wildhorn Trail Running Association · 501(c)(3) nonprofit</span>
        <span class="meta">
          <span>Wildhorn Region, USA</span>
          <span>hello@wildhorntra.org</span>
        </span>
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceFooter.tag, NittanyIceFooter);