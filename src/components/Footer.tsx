import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { href: 'mailto:contact@sentrixai.com', icon: Mail, label: 'Email Sentrix Cybersecurity' },
]

export const Footer = () => (
  <footer className="relative mt-24 border-t border-white/10 bg-black/40">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/60">Sentrix Cybersecurity</p>
        <p className="max-w-md text-sm text-foreground/70">
          Friendly, high-signal security expertise for founders and modern teams. Proactive coverage, red-team rigor, and zero
          jargon.
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-6 text-sm">
          {footerLinks.map((link) =>
            link.to.includes('#') ? (
              <Link key={link.to} to={link.to} className="text-foreground/70 transition hover:text-primary">
                {link.label}
              </Link>
            ) : (
              <Link key={link.to} to={link.to} className="text-foreground/70 transition hover:text-primary">
                {link.label}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/80 transition hover:border-primary/60 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-white/5 py-4 text-center text-xs text-foreground/50">
      © {new Date().getFullYear()} Sentrix Cybersecurity. All rights reserved.
    </div>
  </footer>
)

export default Footer

