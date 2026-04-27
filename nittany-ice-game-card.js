import { LitElement, html, css } from "lit";

export class NittanyIceGameCard extends LitElement {

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
      css`
        :host {
          display: block;
        }

        .card {
          background: var(--wtra-surface);
          border: 1px solid var(--wtra-border);
          border-radius: var(--wtra-radius);
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--wtra-shadow);
          transition: transform 0.18s ease, border-color 0.18s ease;
          border-left: 4px solid var(--wtra-purple-deep);
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--wtra-accent);
          border-left-color: var(--wtra-accent);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .event {
          font-family: var(--wtra-font-display);
          font-size: 1.18rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.25;
          color: var(--wtra-text);
          letter-spacing: -0.005em;
        }

        .date {
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--wtra-text-muted);
          white-space: nowrap;
          font-weight: 600;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--wtra-border);
        }

        .label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--wtra-text-muted);
          margin-bottom: 6px;
          font-weight: 600;
        }

        .val {
          font-family: var(--wtra-font-display);
          font-weight: 600;
          font-size: 1.04rem;
          color: var(--wtra-text);
        }

        .footer {
          margin-top: auto;
          font-size: 0.85rem;
          color: var(--wtra-accent);
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