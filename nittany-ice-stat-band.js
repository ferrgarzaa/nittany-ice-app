import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceStatBand extends DDD {

  static get tag() {
    return "nittany-ice-stat-band";
  }

  constructor() {
    super();
    this.stats = [];
  }

  static get properties() {
    return {
      ...super.properties,
      stats: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-14) var(--ddd-spacing-6);
          background: var(--ddd-theme-default-limestoneMaxLight);
          border-top: var(--ddd-border-sm);
          border-bottom: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        .grid {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--ddd-spacing-7);
          text-align: center;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-1);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-3);
          border-left: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        .stat:first-child {
          border-left: none;
        }

        .num {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-l);
          font-weight: 700;
          color: var(--ddd-theme-default-beaverBlue);
          line-height: 1;
        }

        .label {
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--ddd-theme-default-potentialMidnight);
          font-weight: 600;
        }

        @media (max-width: 720px) {
          .stat {
            border-left: none;
            border-top: var(--ddd-border-sm);
            border-color: var(--ddd-theme-default-limestoneLight);
            padding-top: var(--ddd-spacing-5);
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