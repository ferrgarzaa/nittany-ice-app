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
      stats: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: white;
          padding: var(--ddd-spacing-8) var(--ddd-spacing-5);
          border-top: var(--ddd-border-sm);
          border-top-color: var(--ddd-theme-default-limestoneLight);
          border-bottom: var(--ddd-border-sm);
          border-bottom-color: var(--ddd-theme-default-limestoneLight);
          font-family: var(--ddd-font-primary);
        }

        .grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--ddd-spacing-5);
          text-align: center;
        }

        .stat {
          padding: var(--ddd-spacing-3);
        }

        .num {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-original87Pink);
          line-height: 1;
          margin-bottom: var(--ddd-spacing-2);
        }

        .label {
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ddd-theme-default-coalyGray);
          font-weight: var(--ddd-font-weight-bold);
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