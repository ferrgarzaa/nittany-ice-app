import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceScheduleBand extends DDD {

  static get tag() {
    return "nittany-ice-schedule-band";
  }

  constructor() {
    super();
    this.events = [];
  }

  static get properties() {
    return {
      ...super.properties,
      events: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }

        .band {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }

        .row {
          display: grid;
          grid-template-columns: 110px 2fr 1.5fr 110px 130px;
          align-items: center;
          gap: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .row:hover {
          transform: translateX(4px);
          border-color: var(--ddd-theme-default-beaverBlue);
        }

        .date {
          font-family: var(--ddd-font-primary);
          font-weight: 600;
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-default-beaverBlue);
        }

        .name {
          font-family: var(--ddd-font-primary);
          font-weight: 600;
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-default-coalyGray);
        }

        .loc {
          color: var(--ddd-theme-default-potentialMidnight);
          font-size: var(--ddd-font-size-xxs);
        }

        .dist {
          background: var(--ddd-theme-default-limestoneMaxLight);
          color: var(--ddd-theme-default-coalyGray);
          font-weight: 700;
          font-size: var(--ddd-font-size-3xs);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-rounded);
          text-align: center;
          justify-self: start;
          letter-spacing: 0.04em;
        }

        .level {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: var(--ddd-font-size-4xs);
          color: var(--ddd-theme-default-nittanyNavy);
          font-weight: 700;
          text-align: right;
        }

        .empty {
          text-align: center;
          padding: var(--ddd-spacing-8);
          color: var(--ddd-theme-default-potentialMidnight);
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-sm);
          border-style: dashed;
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        @media (max-width: 760px) {
          .row {
            grid-template-columns: 1fr;
            gap: var(--ddd-spacing-2);
            padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          }
          .level, .dist {
            justify-self: start;
            text-align: left;
          }
        }
      `
    ];
  }

  _renderRow(ev) {
    return html`
      <article class="row">
        <div class="date">${ev.date}</div>
        <div class="name">${ev.name}</div>
        <div class="loc">${ev.location}</div>
        <div class="dist">${ev.distance}</div>
        <div class="level">${ev.level}</div>
      </article>
    `;
  }

  render() {
    if (!this.events || this.events.length === 0) {
      return html`<div class="empty">Race calendar coming soon — check back shortly.</div>`;
    }
    return html`
      <div class="band">
        ${this.events.map((ev) => this._renderRow(ev))}
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceScheduleBand.tag, NittanyIceScheduleBand);