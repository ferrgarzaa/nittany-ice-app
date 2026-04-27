import { LitElement, html, css } from "lit";

export class NittanyIceStatBand extends LitElement {

  static get tag() {
    return "nittany-ice-stat-band";
  }

  constructor() {
    super();
    this.stats = [];
  }

  static get properties() {
    return {
      stats: { type: Array },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 56px 24px;
          background: var(--wtra-surface-alt);
          border-top: 1px solid var(--wtra-border);
          border-bottom: 1px solid var(--wtra-border);
        }

        .grid {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 28px;
          text-align: center;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 18px 12px;
          border-left: 1px solid var(--wtra-border);
        }

        .stat:first-child {
          border-left: none;
        }

        .num {
          font-family: var(--wtra-font-display);
          font-size: clamp(2rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--wtra-accent);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--wtra-text-muted);
          font-weight: 600;
        }

        @media (max-width: 720px) {
          .stat {
            border-left: none;
            border-top: 1px solid var(--wtra-border);
            padding-top: 22px;
          }
          .stat:first-child {
            border-top: none;
            padding-top: 0;
          }
        }
      `
    ];
  }

  _renderStat(s) {
    return html`
      <div class="stat">
        <div class="num">${s.value}</div>
        <div class="label">${s.label}</div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="grid">
        ${this.stats.map((s) => this._renderStat(s))}
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceStatBand.tag, NittanyIceStatBand);