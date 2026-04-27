import { LitElement, html, css } from "lit";

export class NittanyIceFooter extends LitElement {

  static get tag() {
    return "nittany-ice-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return {
      year: { type: Number },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          background: var(--wtra-earth);
          color: var(--wtra-cream);
          padding: 64px 24px 28px;
          margin-top: 48px;
        }

        .wrap {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 340px;
        }

        .brand .mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--wtra-purple-soft), var(--wtra-green-soft));
          display: grid;
          place-items: center;
          color: var(--wtra-earth);
          font-family: var(--wtra-font-display);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .brand strong {
          font-family: var(--wtra-font-display);
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.005em;
        }

        .brand p {
          margin: 0;
          color: rgba(245, 239, 224, 0.78);
          line-height: 1.6;
          font-size: 0.94rem;
        }

        .col h4 {
          margin: 0 0 16px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--wtra-purple-soft);
          font-weight: 700;
        }

        .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .col a {
          color: rgba(245, 239, 224, 0.85);
          text-decoration: none;
          font-size: 0.94rem;
          transition: color 0.15s ease;
        }

        .col a:hover {
          color: var(--wtra-cream);
        }

        .bottom {
          max-width: 1240px;
          margin: 48px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(245, 239, 224, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.84rem;
          color: rgba(245, 239, 224, 0.65);
        }

        .bottom .meta {
          display: flex;
          gap: 18px;
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
            gap: 32px;
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