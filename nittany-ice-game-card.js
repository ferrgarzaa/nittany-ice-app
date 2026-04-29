import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NittanyIceGameCard extends DDD {

  static get tag() {
    return "nittany-ice-game-card";
  }

  constructor() {
    super();
    this.event = "";
    this.date = "";
    this.winner = "";
    this.time = "";
    this.participants = "";
  }

  static get properties() {
    return {
      event: { type: String },
      date: { type: String },
      winner: { type: String },
      time: { type: String },
      participants: { type: String },
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

        .card {
          background-color: white;
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-left: var(--ddd-border-lg);
          border-left-color: var(--ddd-theme-default-original87Pink);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-4);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--ddd-spacing-3);
        }

        .event {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-ms);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
          margin: 0;
          line-height: var(--ddd-lh-120);
        }

        .date {
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-coalyGray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: var(--ddd-font-weight-bold);
          white-space: nowrap;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-3);
          padding-top: var(--ddd-spacing-3);
          border-top: var(--ddd-border-sm);
          border-top-color: var(--ddd-theme-default-limestoneLight);
        }

        .label {
          font-size: var(--ddd-font-size-3xs);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ddd-theme-default-coalyGray);
          margin-bottom: var(--ddd-spacing-1);
        }

        .val {
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-coalyGray);
        }

        .footer {
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-original87Pink);
          font-weight: var(--ddd-font-weight-bold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `
    ];
  }

  render() {
    return html`
      <article class="card">
        <div class="top">
          <h3 class="event">${this.event}</h3>
          <span class="date">${this.date}</span>
        </div>
        <div class="row">
          <div>
            <div class="label">Top finisher</div>
            <div class="val">${this.winner}</div>
          </div>
          <div>
            <div class="label">Winning time</div>
            <div class="val">${this.time}</div>
          </div>
        </div>
        <div class="footer">${this.participants}</div>
      </article>
    `;
  }
}

globalThis.customElements.define(NittanyIceGameCard.tag, NittanyIceGameCard);