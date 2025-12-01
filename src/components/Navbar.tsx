import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import '../App.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
]

const mobileLinkClasses =
  'block w-full rounded-full px-4 py-3 text-center text-base font-semibold text-foreground hover:bg-foreground/10'

const logoUrl = 'https://ik.imagekit.io/69k78mmw6/Untitled%20design%20(9).png'

const NavLogo = () => (
  <Link to="/" className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide">
    <img src={logoUrl} alt="Sentrix AI" className="h-10 w-10 rounded-xl border border-white/10 bg-black/70 object-contain" />
    <div className="flex flex-col leading-tight">
      <span className="text-sm uppercase text-primary/80">Sentrix</span>
      <span className="text-white">Cybersecurity</span>
    </div>
  </Link>
)

const DesktopLinks = () => (
  <div className="hidden items-center gap-8 lg:flex">
    {navLinks.map((link) =>
      link.to.includes('#') ? (
        <Link key={link.to} to={link.to} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
          {link.label}
        </Link>
      ) : (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`
          }
        >
          {link.label}
        </NavLink>
      ),
    )}
  </div>
)

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLogo />
        <DesktopLinks />
        <div className="flex items-center gap-3">
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/contact">Book a free audit</Link>
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur">
          {navLinks.map((link) =>
            link.to.includes('#') ? (
              <Link key={link.to} to={link.to} className={mobileLinkClasses}>
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} className={mobileLinkClasses}>
                {link.label}
              </NavLink>
            ),
          )}
          <Button asChild className="mt-3 w-full rounded-full" size="md">
            <Link to="/contact">Talk to an expert</Link>
          </Button>
        </div>
      )}
    </header>
  )
}

export default Navbar

