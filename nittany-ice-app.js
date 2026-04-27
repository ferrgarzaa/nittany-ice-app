import { LitElement, html, css } from "lit";
import "./nittany-ice-header.js";
import "./nittany-ice-footer.js";
import "./nittany-ice-hero.js";
import "./nittany-ice-cta.js";
import "./nittany-ice-program-card.js";
import "./nittany-ice-news-card.js";
import "./nittany-ice-game-card.js";
import "./nittany-ice-stat-band.js";
import "./nittany-ice-schedule-band.js";

export class NittanyIceApp extends LitElement {

  static get tag() {
    return "nittany-ice-app";
  }

  constructor() {
    super();
    this.page = this._getPage();
    this.schedule = this._fallbackSchedule();
    this.addEventListener("wtra-navigate", (e) => this._onNavigate(e));
    window.addEventListener("popstate", () => {
      this.page = this._getPage();
    });
  }

  static get properties() {
    return {
      page: { type: String },
      schedule: { type: Array },
    };
  }

  _getPage() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  }

  async firstUpdated() {
    try {
      const res = await fetch("/api/schedule");
      if (res.ok) {
        const data = await res.json();
        if (data && data.events && data.events.length) {
          this.schedule = data.events;
        }
      }
    } catch (e) {}
  }

  _fallbackSchedule() {
    return [
      { date: "May 2", name: "Spring Wildflower 25K", location: "Cedar Hollow Trailhead", distance: "25K", level: "Intermediate" },
      { date: "Jun 14", name: "Ridgeline Half Marathon", location: "Wildhorn Ridge", distance: "13.1 MI", level: "Advanced" },
      { date: "Jul 19", name: "Sunset 10K Series #1", location: "Aspen Meadows", distance: "10K", level: "All levels" },
      { date: "Aug 9", name: "Youth Trail Festival", location: "Cedar Hollow", distance: "1K / 5K", level: "Youth" },
      { date: "Sep 6", name: "Wildhorn 50K Ultra", location: "North Pass", distance: "50K", level: "Expert" },
      { date: "Oct 11", name: "Autumn Leaves 15K", location: "Birchwood Loop", distance: "15K", level: "All levels" },
      { date: "Nov 1", name: "Steward Trail Cleanup Run", location: "Various", distance: "5K", level: "Community" }
    ];
  }

  _onNavigate(e) {
    const page = e.detail && e.detail.page ? e.detail.page : "home";
    this.page = page;
    const url = page === "home" ? window.location.pathname : `${window.location.pathname}?page=${page}`;
    window.history.pushState({ page }, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          min-height: 100vh;
          background: var(--wtra-bg);
          color: var(--wtra-text);
        }

        main {
          display: block;
          min-height: 60vh;
        }

        .section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 64px 24px;
        }

        .section h2 {
          font-family: var(--wtra-font-display);
          font-size: clamp(1.8rem, 3.6vw, 2.6rem);
          margin: 0 0 12px;
          color: var(--wtra-text);
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .section .lede {
          color: var(--wtra-text-muted);
          max-width: 640px;
          line-height: 1.65;
          font-size: 1.04rem;
          margin: 0 0 36px;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          color: var(--wtra-accent);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 22px;
        }

        .placeholder {
          background: var(--wtra-surface);
          border: 1px dashed var(--wtra-border);
          border-radius: var(--wtra-radius);
          padding: 48px;
          text-align: center;
          color: var(--wtra-text-muted);
        }
      `
    ];
  }

  _renderHome() {
    return html`
      <nittany-ice-hero></nittany-ice-hero>
      <nittany-ice-stat-band
        .stats=${[
          { value: "1,200+", label: "Active members" },
          { value: "14", label: "Annual races" },
          { value: "320", label: "Youth runners" },
          { value: "85 mi", label: "Trails maintained" }
        ]}
      ></nittany-ice-stat-band>
      <section class="section">
        <div class="eyebrow">What we offer</div>
        <h2>Programs for every kind of runner</h2>
        <p class="lede">Whether you are lacing up for the first time or chasing an ultra finish, our programs meet you on the trail you are on.</p>
        <div class="grid-3">
          <nittany-ice-program-card
            icon="◐"
            title="Group training runs"
            text="Weekly coached runs across the Wildhorn region, sorted by pace and distance — no one runs alone."
            link="?page=training"
            linktext="See programs"
          ></nittany-ice-program-card>
          <nittany-ice-program-card
            icon="✦"
            title="Race series"
            text="Fourteen races a year — from sunset 10Ks to the Wildhorn 50K Ultra — with member discounts and priority registration."
            link="?page=schedule"
            linktext="View calendar"
          ></nittany-ice-program-card>
          <nittany-ice-program-card
            icon="❖"
            title="Youth & family"
            text="Mountain Cubs (ages 6–12) and Junior Wildhorn (13–17) build skills, confidence, and a love of the trails."
            link="?page=parent-info"
            linktext="Parent info"
          ></nittany-ice-program-card>
        </div>
      </section>
      <section class="section">
        <div class="eyebrow">Latest news</div>
        <h2>From the trail journal</h2>
        <p class="lede">Race recaps, training tips, and stories from the Wildhorn community.</p>
        <div class="grid-3">
          <nittany-ice-news-card
            category="Race recap"
            date="Apr 12, 2026"
            title="Spring Trail Opener: 412 runners take Cedar Hollow"
            excerpt="A perfect 58° morning brought our biggest opener yet. Highlights, full results, and photos from the day."
            image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&h=600&q=80"
            link="?page=news"
          ></nittany-ice-news-card>
          <nittany-ice-news-card
            category="Training"
            date="Apr 5, 2026"
            title="Building your first 25K base — a 10-week plan"
            excerpt="Coach Mara breaks down a beginner-friendly plan for the Spring Wildflower 25K, with mileage, hills, and rest weeks."
            image="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=900&h=600&q=80"
            link="?page=training"
          ></nittany-ice-news-card>
          <nittany-ice-news-card
            category="Stewardship"
            date="Mar 28, 2026"
            title="Volunteers clear 4.2 miles of the Birchwood Loop"
            excerpt="Forty volunteers, two trail crews, and one very muddy Saturday. Here is what we got done — and what is next."
            image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&h=600&q=80"
            link="?page=stewardship"
          ></nittany-ice-news-card>
        </div>
      </section>
      <nittany-ice-cta></nittany-ice-cta>
    `;
  }

  _renderRaces() {
    return html`
      <section class="section">
        <div class="eyebrow">Race series</div>
        <h2>2026 Wildhorn race calendar</h2>
        <p class="lede">A full year of trail racing — from approachable 10Ks to a flagship 50K ultra. Members get priority registration and discounted entry.</p>
        <nittany-ice-schedule-band .events=${this.schedule}></nittany-ice-schedule-band>
      </section>
      <section class="section">
        <div class="eyebrow">Recent results</div>
        <h2>Latest race winners</h2>
        <div class="grid-2">
          <nittany-ice-game-card
            event="Spring Trail Opener 10K"
            date="Apr 12, 2026"
            winner="Elena Vasquez"
            time="42:18"
            participants="412 finishers"
          ></nittany-ice-game-card>
          <nittany-ice-game-card
            event="Frostbite Half Marathon"
            date="Mar 8, 2026"
            winner="Marcus Chen"
            time="1:24:06"
            participants="287 finishers"
          ></nittany-ice-game-card>
          <nittany-ice-game-card
            event="Winter Solstice 5K"
            date="Dec 21, 2025"
            winner="Sarah Park"
            time="20:42"
            participants="195 finishers"
          ></nittany-ice-game-card>
          <nittany-ice-game-card
            event="Autumn Ridge 25K"
            date="Oct 19, 2025"
            winner="Daniel Reeves"
            time="2:08:55"
            participants="358 finishers"
          ></nittany-ice-game-card>
        </div>
      </section>
    `;
  }

  _renderSchedule() {
    return html`
      <section class="section">
        <div class="eyebrow">Schedule</div>
        <h2>2026 race schedule</h2>
        <p class="lede">Mark your calendar. Members get early registration two weeks before public sign-ups open.</p>
        <nittany-ice-schedule-band .events=${this.schedule}></nittany-ice-schedule-band>
      </section>
      <nittany-ice-cta
        eyebrow="Don't miss out"
        heading="Members register first."
        copy="Wildhorn members get priority race registration two weeks before the general public, plus discounted entry on every race in the series."
        primarylabel="Become a member"
        primarypage="join"
        secondarylabel="See benefits"
        secondarypage="about"
      ></nittany-ice-cta>
    `;
  }

  _renderTraining() {
    return html`
      <section class="section">
        <div class="eyebrow">Training</div>
        <h2>Programs for every distance</h2>
        <p class="lede">Coach-led training groups, structured plans, and weekly group runs across the Wildhorn region.</p>
        <div class="grid-3">
          <nittany-ice-program-card icon="◐" title="Couch to 5K (Trail)" text="A friendly, ten-week intro to trail running. No experience required — just a willingness to walk a few hills." link="?page=join" linktext="Sign up"></nittany-ice-program-card>
          <nittany-ice-program-card icon="✦" title="Half Marathon Build" text="Twelve weeks of structured training for your first or fastest trail half. Long runs, hill work, and recovery." link="?page=join" linktext="Sign up"></nittany-ice-program-card>
          <nittany-ice-program-card icon="❖" title="Ultra Foundations" text="Sixteen weeks of base building for the Wildhorn 50K Ultra. Back-to-back long runs, fueling, and pacing strategy." link="?page=join" linktext="Sign up"></nittany-ice-program-card>
          <nittany-ice-program-card icon="◇" title="Wednesday Night Runs" text="Free weekly group runs leaving from Cedar Hollow Trailhead at 6pm. All paces welcome — no one runs alone." link="?page=schedule" linktext="See dates"></nittany-ice-program-card>
          <nittany-ice-program-card icon="◈" title="Saturday Long Runs" text="Distances from 8 to 22 miles, organized by pace group. Coffee and pastries at the trailhead afterward." link="?page=schedule" linktext="See dates"></nittany-ice-program-card>
          <nittany-ice-program-card icon="◯" title="Strength for Trail" text="Weekly mobility and strength sessions designed for trail runners. Improve your descents and stay injury-free." link="?page=join" linktext="Sign up"></nittany-ice-program-card>
        </div>
      </section>
    `;
  }

  _renderParentInfo() {
    return html`
      <section class="section">
        <div class="eyebrow">Youth & families</div>
        <h2>Mountain Cubs & Junior Wildhorn</h2>
        <p class="lede">Our youth programs build confidence, fitness, and a love of the outdoors — guided by certified coaches and trail safety standards.</p>
        <div class="grid-2">
          <nittany-ice-program-card icon="❖" title="Mountain Cubs (ages 6–12)" text="Weekly skills sessions, scavenger hunts, and fun trail runs in a safe, supportive group setting. No racing required." link="?page=join" linktext="Enroll"></nittany-ice-program-card>
          <nittany-ice-program-card icon="✦" title="Junior Wildhorn (ages 13–17)" text="Structured training for young athletes interested in racing. Includes coaching, mentorship, and free entry to youth races." link="?page=join" linktext="Enroll"></nittany-ice-program-card>
          <nittany-ice-program-card icon="◐" title="Family trail days" text="One Saturday a month, the whole family comes out. Easy distances, picnics, and a chance to meet other trail families." link="?page=schedule" linktext="See dates"></nittany-ice-program-card>
          <nittany-ice-program-card icon="◇" title="Parent volunteer program" text="Lend a hand at races, training runs, or trail cleanups. Background checks and safety training provided." link="?page=volunteer" linktext="Volunteer"></nittany-ice-program-card>
        </div>
      </section>
      <nittany-ice-cta eyebrow="Youth registration" heading="Give your kid the trail." copy="Enrollment for the 2026 youth season is open. Scholarship spots are available — no family is turned away for financial reasons." primarylabel="Enroll now" primarypage="join" secondarylabel="Contact us" secondarypage="contact"></nittany-ice-cta>
    `;
  }

  _renderAbout() {
    return html`
      <section class="section">
        <div class="eyebrow">About us</div>
        <h2>A community built on the trails</h2>
        <p class="lede">Wildhorn Trail Running Association is a 501(c)(3) nonprofit founded in 2011 by a small group of trail runners who wanted to build something bigger than themselves. Today we are 1,200+ members strong, racing, training, and protecting the trails we love.</p>
        <div class="grid-3">
          <nittany-ice-program-card icon="◐" title="Our mission" text="To build an inclusive, welcoming community of trail runners — and to protect the wild places we run."></nittany-ice-program-card>
          <nittany-ice-program-card icon="✦" title="Our values" text="Trail stewardship, community over competition, accessibility, and the belief that every runner belongs."></nittany-ice-program-card>
          <nittany-ice-program-card icon="❖" title="Our impact" text="Since 2011 we have logged 8,400+ stewardship hours, awarded 240 youth scholarships, and built a community that shows up for each other."></nittany-ice-program-card>
        </div>
      </section>
    `;
  }

  _renderContact() {
    return html`
      <section class="section">
        <div class="eyebrow">Get in touch</div>
        <h2>We would love to hear from you</h2>
        <p class="lede">Questions about membership, races, training, or our youth programs? Send a note — we read every message.</p>
        <div class="grid-2">
          <nittany-ice-program-card icon="◐" title="General inquiries" text="Email us at hello@wildhorntra.org and we will get back to you within two business days."></nittany-ice-program-card>
          <nittany-ice-program-card icon="✦" title="Race & registration" text="Questions about a specific race or your registration? Email races@wildhorntra.org for the fastest response."></nittany-ice-program-card>
          <nittany-ice-program-card icon="❖" title="Youth programs" text="Reach our youth program director at youth@wildhorntra.org for enrollment, scholarships, and family questions."></nittany-ice-program-card>
          <nittany-ice-program-card icon="◇" title="Volunteer & stewardship" text="Want to help out at races or on the trails? Email volunteer@wildhorntra.org to get on the list."></nittany-ice-program-card>
        </div>
      </section>
    `;
  }

  _renderJoin() {
    return html`
      <section class="section">
        <div class="eyebrow">Membership</div>
        <h2>Join Wildhorn TRA</h2>
        <p class="lede">Membership is what keeps the trails clear, the youth programs free, and the community strong. Pick the level that fits you.</p>
        <div class="grid-3">
          <nittany-ice-program-card icon="◐" title="Individual — $45/yr" text="Priority race registration, race discounts, weekly group runs, training plan discounts, and a welcome pack." link="?page=contact" linktext="Sign up"></nittany-ice-program-card>
          <nittany-ice-program-card icon="✦" title="Family — $75/yr" text="Everything in the individual plan, for two adults and up to three youth runners. Includes Mountain Cubs enrollment." link="?page=contact" linktext="Sign up"></nittany-ice-program-card>
          <nittany-ice-program-card icon="❖" title="Steward — $150/yr" text="All member benefits plus a tax-deductible donation that funds youth scholarships and trail stewardship." link="?page=contact" linktext="Sign up"></nittany-ice-program-card>
        </div>
      </section>
    `;
  }

  _renderFallback() {
    return html`
      <section class="section">
        <div class="eyebrow">Coming soon</div>
        <h2>This page is on its way</h2>
        <p class="lede">We are building this out — check back shortly. In the meantime, explore our races, training programs, or learn more about our community.</p>
        <div class="placeholder">Page <strong>${this.page}</strong> is not yet built. Try the menu above.</div>
      </section>
    `;
  }

  _renderPage() {
    if (this.page === "home") return this._renderHome();
    if (this.page === "races") return this._renderRaces();
    if (this.page === "schedule") return this._renderSchedule();
    if (this.page === "training") return this._renderTraining();
    if (this.page === "parent-info") return this._renderParentInfo();
    if (this.page === "about") return this._renderAbout();
    if (this.page === "contact") return this._renderContact();
    if (this.page === "join") return this._renderJoin();
    return this._renderFallback();
  }

  render() {
    return html`
      <nittany-ice-header></nittany-ice-header>
      <main>${this._renderPage()}</main>
      <nittany-ice-footer></nittany-ice-footer>
    `;
  }
}

globalThis.customElements.define(NittanyIceApp.tag, NittanyIceApp);