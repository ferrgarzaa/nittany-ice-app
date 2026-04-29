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
      events: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
        }

        .band {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }

        .row {
          display: grid;
          grid-template-columns: 100px 2fr 1.5fr 100px 110px;
          align-items: center;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-4);
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
        }

        .date {
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-original87Pink);
          font-size: var(--ddd-font-size-s);
        }

        .name {
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
          font-size: var(--ddd-font-size-s);
        }

        .loc {
          color: var(--ddd-theme-default-coalyGray);
          font-size: var(--ddd-font-size-3xs);
        }

        .dist {
          background-color: var(--ddd-theme-default-shrineLight);
          color: var(--ddd-theme-default-coalyGray);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-3xs);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-rounded);
          text-align: center;
          justify-self: start;
        }

        .level {
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          font-weight: var(--ddd-font-weight-bold);
          text-align: right;
        }

        .empty {
          text-align: center;
          padding: var(--ddd-spacing-8);
          color: var(--ddd-theme-default-coalyGray);
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
        }

        @media (max-width: 760px) {
          .row {
            grid-template-columns: 1fr;
            gap: var(--ddd-spacing-2);
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
      return html`<div class="empty">Race calendar coming soon.</div>`;
    }
    return html`
      <div class="band">
        ${this.events.map((ev) => this._renderRow(ev))}
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceScheduleBand.tag, NittanyIceScheduleBand);