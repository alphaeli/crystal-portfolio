import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const CAPABILITIES = [
  {
    "index": "01",
    "title": "Digital Marketing & Campaign Management",
    "items": [
      "Campaign planning",
      "Social media strategy",
      "Meta advertising",
      "TikTok campaign support",
      "LinkedIn marketing",
      "Lead generation",
      "Launch coordination",
      "Reporting"
    ]
  },
  {
    "index": "02",
    "title": "Content & Creative Production",
    "items": [
      "Graphic design",
      "Social graphics",
      "Carousels",
      "Reels and short-form video",
      "Copywriting",
      "Email creative",
      "Campaign assets",
      "Print collateral"
    ]
  },
  {
    "index": "03",
    "title": "Funnels, Websites & Conversion Pages",
    "items": [
      "Landing pages",
      "Funnel design",
      "Website updates",
      "Forms",
      "Booking flows",
      "Checkout flows",
      "WordPress",
      "Framer",
      "GoHighLevel"
    ]
  },
  {
    "index": "04",
    "title": "CRM, Email & Marketing Automation",
    "items": [
      "GoHighLevel",
      "CRM workflows",
      "Email marketing",
      "Newsletters",
      "Lead nurturing",
      "SMS",
      "DM automation",
      "Appointment setting",
      "Lead qualification",
      "Pipeline management",
      "Database management"
    ]
  }
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          I build the creative, marketing and digital systems behind growing brands.
          <br />
          Digital Marketing • Content • Funnels • CRM • Automation
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">I don't just hand over a strategy deck. I help turn the strategy into the actual work.</p>
          <p className="agrid__note">From content and campaigns to landing pages, CRM and follow-up, I like making ideas easier to launch, manage and keep moving.</p>
          <p className="agrid__note">I work across digital marketing, creative production, web and marketing operations. That means I can think about the message a customer sees, the page they land on, the form they complete, the workflow that follows, and the content that keeps the relationship going.</p>
          <p className="agrid__note">My work is especially suited to coaches, service providers, entrepreneurs, SMEs and growing teams that have good ideas but need someone who can help turn those ideas into consistent execution.</p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks" aria-hidden="true"><span className="agrid__mark">{c.index}</span></span>
                <div><h2 className="agrid__cap-title">{c.title}</h2><p className="agrid__cap-detail">{c.items.join(' · ')}</p></div>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* TODO: Add credentials only if Crystal supplies verified details. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy"><span className="agrid__cell-title">{profile.location}</span><span className="agrid__cell-meta">Remote collaboration</span></span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
