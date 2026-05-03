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
      ...super.properties,
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
        }

        .card {
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-6);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
          box-shadow: var(--ddd-boxShadow-sm);
          transition: transform 0.18s ease, border-color 0.18s ease;
          border-left: 4px solid var(--ddd-theme-default-nittanyNavy);
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--ddd-theme-default-beaverBlue);
          border-left-color: var(--ddd-theme-default-beaverBlue);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--ddd-spacing-3);
        }

        .event {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-m);
          font-weight: 600;
          margin: 0;
          line-height: 1.25;
          color: var(--ddd-theme-default-coalyGray);
        }

        .date {
          font-size: var(--ddd-font-size-4xs);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ddd-theme-default-potentialMidnight);
          white-space: nowrap;
          font-weight: 600;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-4);
          padding-top: var(--ddd-spacing-4);
          border-top: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-limestoneLight);
        }

        .label {
          font-size: var(--ddd-font-size-4xs);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ddd-theme-default-potentialMidnight);
          margin-bottom: var(--ddd-spacing-1);
          font-weight: 600;
        }

        .val {
          font-family: var(--ddd-font-primary);
          font-weight: 600;
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-default-coalyGray);
        }

        .footer {
          margin-top: auto;
          font-size: var(--ddd-font-size-3xs);
          color: var(--ddd-theme-default-beaverBlue);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
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