import { LitElement, html, css } from "lit";

export class NittanyIceScheduleBand extends LitElement {

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
      css`
        :host {
          display: block;
        }

        .band {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .row {
          display: grid;
          grid-template-columns: 110px 2fr 1.5fr 110px 130px;
          align-items: center;
          gap: 18px;
          padding: 18px 22px;
          background: var(--wtra-surface);
          border: 1px solid var(--wtra-border);
          border-radius: 14px;
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .row:hover {
          transform: translateX(4px);
          border-color: var(--wtra-accent);
        }

        .date {
          font-family: var(--wtra-font-display);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--wtra-accent);
          letter-spacing: 0.005em;
        }

        .name {
          font-family: var(--wtra-font-display);
          font-weight: 600;
          font-size: 1.08rem;
          color: var(--wtra-text);
          letter-spacing: -0.005em;
        }

        .loc {
          color: var(--wtra-text-muted);
          font-size: 0.94rem;
        }

        .dist {
          background: var(--wtra-surface-alt);
          color: var(--wtra-text);
          font-weight: 700;
          font-size: 0.84rem;
          padding: 6px 12px;
          border-radius: 999px;
          text-align: center;
          justify-self: start;
          letter-spacing: 0.04em;
        }

        .level {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.74rem;
          color: var(--wtra-accent-2);
          font-weight: 700;
          text-align: right;
        }

        .empty {
          text-align: center;
          padding: 32px;
          color: var(--wtra-text-muted);
          background: var(--wtra-surface);
          border-radius: 14px;
          border: 1px dashed var(--wtra-border);
        }

        @media (max-width: 760px) {
          .row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 18px 20px;
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