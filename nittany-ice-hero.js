import { LitElement, html, css } from "lit";

export class NittanyIceHero extends LitElement {

  static get tag() {
    return "nittany-ice-hero";
  }

  constructor() {
    super();
    this.eyebrow = "Trail Running Association";
    this.heading = "Run wild. Run free. Run together.";
    this.copy = "We are a community of trail runners, coaches, and stewards racing the ridgelines of the Wildhorn region — and protecting them, mile by mile.";
    this.image = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&h=2000&q=85";
    this.imagealt = "A trail runner ascending a mountain ridge at sunrise";
  }

  static get properties() {
    return {
      eyebrow: { type: String },
      heading: { type: String },
      copy: { type: String },
      image: { type: String },
      imagealt: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .wrap {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          padding: 96px 24px 110px;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          align-items: center;
          gap: 56px;
        }

        .bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(circle at 18% 28%, rgba(74, 58, 92, 0.32), transparent 55%),
            radial-gradient(circle at 82% 72%, rgba(107, 68, 35, 0.22), transparent 55%),
            var(--wtra-bg);
        }

        .ridges {
          position: absolute;
          inset: auto 0 0 0;
          height: 70%;
          z-index: -1;
          opacity: 0.55;
          pointer-events: none;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          color: var(--wtra-accent);
          font-weight: 700;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--wtra-accent);
          display: inline-block;
        }

        h1 {
          font-family: var(--wtra-font-display);
          font-size: clamp(2.4rem, 5.4vw, 4rem);
          line-height: 1.04;
          margin: 0 0 22px;
          color: var(--wtra-text);
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        p {
          max-width: 540px;
          color: var(--wtra-text-muted);
          font-size: 1.08rem;
          line-height: 1.65;
          margin: 0 0 30px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn {
          font-family: inherit;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.96rem;
          cursor: pointer;
          border: 1px solid transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .btn.primary {
          background: var(--wtra-purple-deep);
          color: var(--wtra-cream);
        }

        .btn.primary:hover {
          background: var(--wtra-purple);
          transform: translateY(-1px);
        }

        .btn.ghost {
          background: transparent;
          color: var(--wtra-text);
          border-color: var(--wtra-border);
        }

        .btn.ghost:hover {
          background: var(--wtra-surface-alt);
          border-color: var(--wtra-accent);
        }

        .visual {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--wtra-purple-deep), var(--wtra-bark));
          box-shadow: var(--wtra-shadow);
        }

        .visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .badge {
          position: absolute;
          top: 18px;
          left: 18px;
          background: rgba(245, 239, 224, 0.94);
          color: var(--wtra-purple-deep);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .floater {
          position: absolute;
          bottom: 22px;
          left: 22px;
          right: 22px;
          background: rgba(74, 58, 92, 0.82);
          color: var(--wtra-cream);
          padding: 16px 18px;
          border-radius: 14px;
          display: flex;
          gap: 14px;
          align-items: center;
          font-size: 0.92rem;
        }

        .floater strong {
          font-family: var(--wtra-font-display);
          font-size: 1.06rem;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }

        .floater span {
          opacity: 0.86;
        }

        @media (max-width: 880px) {
          .wrap {
            grid-template-columns: 1fr;
            padding: 64px 24px 72px;
            gap: 36px;
          }
          .visual {
            aspect-ratio: 4 / 3;
            max-height: 460px;
          }
        }
      `
    ];
  }

  _goJoin(e) {
    e.preventDefault();
    this._navigate("join");
  }

  _goSchedule(e) {
    e.preventDefault();
    this._navigate("schedule");
  }

  _navigate(page) {
    this.dispatchEvent(new CustomEvent("wtra-navigate", {
      bubbles: true,
      composed: true,
      detail: { page }
    }));
  }

  render() {
    return html`
      <div class="bg" aria-hidden="true"></div>
      <svg class="ridges" aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,420 L160,360 L320,400 L520,300 L760,380 L980,310 L1200,370 L1440,330 L1440,600 L0,600 Z" fill="#4A3A5C" opacity="0.32"></path>
        <path d="M0,500 L200,440 L420,470 L640,410 L860,460 L1080,420 L1280,460 L1440,430 L1440,600 L0,600 Z" fill="#6B4423" opacity="0.28"></path>
      </svg>
      <div class="wrap">
        <div>
          <div class="eyebrow">${this.eyebrow}</div>
          <h1>${this.heading}</h1>
          <p>${this.copy}</p>
          <div class="actions">
            <a class="btn primary" href="?page=join" @click=${this._goJoin}>Become a member</a>
            <a class="btn ghost" href="?page=schedule" @click=${this._goSchedule}>View race schedule</a>
          </div>
        </div>
        <div class="visual">
          <span class="badge">2026 Season</span>
          <img src=${this.image} alt=${this.imagealt} loading="eager" />
          <div class="floater">
            <div>
              <strong>Spring Wildflower 25K</strong>
              <span>May 2 · Cedar Hollow · Registration open</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NittanyIceHero.tag, NittanyIceHero);