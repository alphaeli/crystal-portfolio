import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
} from '@/components/slab'
import { gymFunnel, bookingFunnel, websiteFunnel, type Funnel } from '@/data/funnels'
import { tools } from './ToolsMarquee'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const thumbSrc = (f: Funnel) =>
  `/home/${f.dir ?? 'funnels'}-${f.file.replace('.html', '.jpeg')}`

const PROJECT_SHOTS = [gymFunnel[0], bookingFunnel[0], websiteFunnel[0], gymFunnel[1]].filter(Boolean)

const OFFERS = [
  {
    "title": "Social Media Strategy & Management",
    "note": "Social"
  },
  {
    "title": "Content & Creative Production",
    "note": "Creative"
  },
  {
    "title": "Funnels, Websites & Landing Pages",
    "note": "Pages"
  },
  {
    "title": "CRM, Email & Automation",
    "note": "Follow-up"
  },
  {
    "title": "Lead Generation & Growth Support",
    "note": "Growth"
  }
]
const OFFER_ICONS = [FunnelSimple, Gear, AddressBook, Globe, AppWindow]

// TODO: Add approved client testimonial details in the next portfolio phase.
const CLIENTS = [{ name: "Client stories", role: "Coming in a later update", work: "Approved feedback to follow", logo: "" }]

// TODO: Replace the decorative avatar fan with approved portraits.
const PHOTOS = [profile.avatarSrc, '/avatar.svg?2', '/avatar.svg?3']

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(tools.length / 2)
  const toolRows = [tools.slice(0, half), tools.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the funnel thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Portfolio details coming in a later update." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Strategy turned into the actual work." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* AI builds: the systems from the Projects tree, two chip rows
          scrolling against each other. */}
      <Link to="/services" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="Marketing systems" desc="Funnels, CRM and follow-up." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.name}-${i}`} className="bento__chip">
                    <Gear size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/contact" className="bento__card bento__card--creds">
        <CardHead Icon={Globe} title="Work with me" desc="Creative, campaigns and systems." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring"><Globe size={60} weight="duotone" /></span>
          <span className="bento__badge-tag">Philippines · GMT+8</span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="From idea to execution." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ title, note }, i) => {
            const Icon = OFFER_ICONS[i]
            return (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          )})}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Testimonials" desc="Approved client stories to follow." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  {c.logo ? (
                    <img src={c.logo} alt="" width={18} height={18} />
                  ) : (
                    <Quotes size={14} weight="fill" />
                  )}
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
