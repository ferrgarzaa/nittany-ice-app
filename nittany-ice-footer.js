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
      year: { type: Number },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-coalyGray);
          color: white;
          padding: var(--ddd-spacing-8) var(--ddd-spacing-5);
          margin-top: var(--ddd-spacing-8);
          font-family: var(--ddd-font-primary);
        }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: var(--ddd-spacing-6);
        }

        .brand strong {
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          display: block;
          margin-bottom: var(--ddd-spacing-2);
        }

        .brand p {
          font-size: var(--ddd-font-size-3xs);
          line-height: var(--ddd-lh-150);
          margin: 0;
          opacity: 0.85;
        }

        .col h4 {
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ddd-theme-default-original87Pink);
          margin: 0 0 var(--ddd-spacing-3);
          font-weight: var(--ddd-font-weight-bold);
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
          color: white;
          text-decoration: none;
          font-size: var(--ddd-font-size-3xs);
          opacity: 0.85;
        }

        .col a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .bottom {
          max-width: 1100px;
          margin: var(--ddd-spacing-6) auto 0;
          padding-top: var(--ddd-spacing-4);
          border-top: var(--ddd-border-sm);
          border-top-color: rgba(255, 255, 255, 0.2);
          font-size: var(--ddd-font-size-3xs);
          opacity: 0.7;
        }

        @media (max-width: 760px) {
          .wrap {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .wrap {
            grid-template-columns: 1fr;
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
          <strong>Wildhorn Trail Running Association</strong>
          <p>A nonprofit community of trail runners, coaches, and stewards in the Wildhorn region.</p>
        </div>
        <div class="col">
          <h4>Explore</h4>
          <ul>
            ${this._renderLink("Race calendar", "schedule")}
            ${this._renderLink("Training", "training")}
            ${this._renderLink("Youth & parents", "parent-info")}
          </ul>
        </div>
        <div class="col">
          <h4>Community</h4>
          <ul>
            ${this._renderLink("Become a member", "join")}
            ${this._renderLink("Contact", "contact")}
          </ul>
        </div>
        <div class="col">
          <h4>About</h4>
          <ul>
            ${this._renderLink("Our story", "about")}
            ${this._renderLink("News", "news")}
          </ul>
        </div>
      </div>
      <div class="bottom">© ${this.year} Wildhorn Trail Running Association</div>
    `;
  }
}

globalThis.customElements.define(NittanyIceFooter.tag, NittanyIceFooter);