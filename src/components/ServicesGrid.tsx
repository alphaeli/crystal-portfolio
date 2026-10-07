import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Service copy is supplied by Crystal. Keep the existing layout and motion.
 * Hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    "index": "01",
    "label": "Clarify",
    "body": "We start with the goal, audience, offer, current setup and the places where execution is getting stuck.",
    "Icon": MagnetStraight,
    "chips": [
      "Audit",
      "Goals",
      "Audience",
      "Research"
    ]
  },
  {
    "index": "02",
    "label": "Build",
    "body": "I turn the strategy into the actual assets and systems—content, pages, campaigns, forms, emails and workflows.",
    "Icon": Timer,
    "chips": [
      "Create",
      "Design",
      "Build",
      "Launch"
    ]
  },
  {
    "index": "03",
    "label": "Improve",
    "body": "Once the work is live, I monitor what is happening, report what matters and refine the next round.",
    "Icon": Trophy,
    "chips": [
      "Monitor",
      "Report",
      "Optimize",
      "Repeat"
    ]
  }
]

type Service = { index: string; title: string; description: string; chip: string; logos: string[]; bullets: string[] }
const SERVICES: Service[] = [
  {
    "index": "01",
    "title": "Social Media Strategy & Management",
    "description": "Ongoing planning and execution across content, publishing, community and performance.",
    "chip": "Social",
    "logos": [],
    "bullets": [
      "Content strategy and calendars",
      "Publishing and community support",
      "Performance reporting and optimization"
    ]
  },
  {
    "index": "02",
    "title": "Content & Creative Production",
    "description": "Platform-ready creative that turns campaign ideas into content people can actually see, read and share.",
    "chip": "Creative",
    "logos": [],
    "bullets": [
      "Graphics, carousels and campaign assets",
      "Reels and short-form video editing",
      "Copy, hashtags and content repurposing"
    ]
  },
  {
    "index": "03",
    "title": "Funnels, Websites & Landing Pages",
    "description": "Conversion-focused pages built around a clear next action, from inquiry to booking or checkout.",
    "chip": "Pages",
    "logos": [
      "/icons/gohighlevel.png"
    ],
    "bullets": [
      "Landing pages and campaign pages",
      "Forms, bookings and checkout flows",
      "WordPress, Framer and GoHighLevel support"
    ]
  },
  {
    "index": "04",
    "title": "CRM, Email & Automation",
    "description": "Lead capture and follow-up systems that keep the customer journey moving after the first click.",
    "chip": "Follow-up",
    "logos": [
      "/icons/gohighlevel.png"
    ],
    "bullets": [
      "GoHighLevel workflows and pipelines",
      "Email, SMS and nurture sequences",
      "Forms, calendars and database management"
    ]
  },
  {
    "index": "05",
    "title": "Lead Generation & Growth Support",
    "description": "Campaign support for finding, qualifying and moving the right prospects toward the next step.",
    "chip": "Growth",
    "logos": [],
    "bullets": [
      "Meta advertising support",
      "LinkedIn Sales Navigator outreach",
      "Lead qualification and appointment setting"
    ]
  }
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          From idea to execution.
        </h1>
        <p className="pgrid__lede">
          I help brands connect strategy, creative, campaigns and the systems behind them.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Clarify. Build. Improve.
              <br />
              <span>From strategy to the actual work.</span>
            </h2>
            <p className="sgrid__method-sub">
              The goal is to understand what needs to happen, build the pieces that make it happen, then keep improving the system once it is live.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">How I can help</h2>
            <p className="sgrid__offers-sub">Creative execution on the front end. Marketing systems working behind it.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Illustrative workflow</span>
              <h2 className="sgrid__flow-title">From inquiry to follow-up.</h2>
              <p className="sgrid__flow-sub">
                An example of how forms, bookings, messages and lead nurturing can connect. This is a demonstration, not a client result.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
