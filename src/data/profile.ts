import { Briefcase, Stack, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

// TODO: Add Crystal's approved portrait and public social URLs.
// TODO: Add Crystal's public email
export const profile: Profile = {
  name: 'Crystal Judy',
  firstName: 'Crystal',
  handle: '',
  role: 'Digital Marketing & Creative Systems Specialist',
  avatarSrc: '/avatar.svg',
  verifiedLabel: '', // No verified credential has been supplied.
  email: '',
  location: 'Philippines · GMT+8',
  stats: [
    { value: 'Marketing', label: 'Strategy & campaigns', Icon: Briefcase },
    { value: 'Creative', label: 'Content & systems', Icon: Stack },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: { line1: 'Strategy. Creative.', line2: 'Systems that get it done.' },
  hero: {
    body: 'I help service-based businesses and growing brands turn ideas into content, campaigns, funnels, and follow-up systems that actually get implemented.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Anonymous avatar illustration',
  },
  socials: [],
}
