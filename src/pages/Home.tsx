import { ArrowRight, CheckCircle2, Clock3, Layers3, LineChart, ShieldCheck, Signal, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const valueProps = [
  {
    title: 'Founder-first guidance',
    copy: 'We translate complex threats into calm, actionable guidance your leadership team can use immediately.',
  },
  {
    title: 'Operational partnership',
    copy: 'A single partner for assessments, remediation, playbooks, and ongoing assurance across your stack.',
  },
  {
    title: 'Signal over noise',
    copy: 'We deliver prioritized actions, quantified risk reduction, and support your team through each milestone.',
  },
]

const services = [
  {
    title: 'Endpoint Security (EDR & Antivirus)',
    copy: 'Modern endpoint protection with EDR and next-gen antivirus, deployed and managed for your SME.',
    icon: ShieldCheck,
    what: ['Malware protection', 'Ransomware protection', 'Zero-day threat detection', 'Centralized dashboard'],
    why: 'To stop malware and ransomware fast with simple, centralised protection.',
  },
  {
    title: 'Firewall & Network Security',
    copy: 'Next-generation firewall to secure the perimeter and remote access.',
    icon: Layers3,
    what: ['Install/upgrade firewall', 'Configure Intrusion Prevention (IPS)', 'Geo-blocking', 'Web filtering', 'VPN access with MFA'],
    why: 'Stop threats at the edge using advanced firewall controls and filtering.',
  },
  {
    title: 'MFA Rollout & Identity Security',
    copy: 'End-to-end MFA rollout across your core identities, apps, and remote access.',
    icon: Users,
    what: ['Microsoft 365 MFA', 'Google Workspace MFA', 'VPN MFA', 'Local admin account protections'],
    why: 'Insurance providers now require MFA.',
  },
  {
    title: 'Patch & Update Management',
    copy: 'We keep your devices up to date and give you real visibility into patch coverage.',
    icon: Clock3,
    what: ['Windows/macOS updates', '3rd-party app patches', 'Vulnerability reporting'],
    why: 'Stay secure and compliant with automated updates and clear vulnerability visibility.',
  },
  {
    title: 'Backup & Disaster Recovery',
    copy: 'Resilient, tested backups so you can recover quickly from ransomware or outages.',
    icon: LineChart,
    what: ['Server backups', 'Microsoft 365 backups', 'Endpoint backups', 'Off-site/cloud copies'],
    why: 'Recover from ransomware or outages quickly using secure, off-site backups.',
  },
]

const processSteps = [
  {
    title: 'Free Security Audit',
    copy: 'We conduct a free security audit of your infrastructure and processes, with internal and external frameworks.',
  },
  {
    title: 'Audit Analysis',
    copy: 'We present the audit findings and recommendations in a clear, actionable report.',
  },
  {
    title: 'Fixing Vulnerabilities',
    copy: 'Vulnerabilites found in the audit are fixed, with a plan for ongoing monitoring and remediation.',
  },
]

const stats = [
  { label: 'Security alerting & response', value: '24/7' },
  { label: 'Of SMEs have cyber risks', value: '90%' },
  { label: 'of automated attacks stopped by MFA', value: '99.9%' },
]

const Home = () => (
  <div className="relative z-10 space-y-24 px-6">
    <section className="mx-auto flex max-w-6xl flex-col gap-12 py-24 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-8 text-left">
        <Badge>Friendly, proactive security</Badge>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cybersecuity for SMEs 
          </h1>
          <p className="text-lg text-foreground/80">
            We are the embedded partner for SMEs that want to be secure from online attacks and data breaches.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact" className="flex items-center gap-2">
              Book a free security audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="mailto:contact@sentrixai.com" className="flex items-center gap-2">
              Email the team
            </a>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 text-sm text-foreground/70">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          Always-on partner, not a ticket queue.
        </div>
        <div className="rounded-2xl border border-white/5 bg-black/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Coverage snapshot</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Find risks early
            </li>
            <li className="flex items-center gap-2">
              <Signal className="h-4 w-4 text-primary" /> Managed detection, curated alerts
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> Secure your business
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6">
          <p className="font-semibold text-white">“Most cyberattacks are preventable. My mission is to give SMEs the protection they deserve without the complexity.”</p>
          <p className="mt-3 text-sm text-foreground/60">Isaac Ward, Founder, Sentrix  </p>
        </div>
      </div>
    </section>

    <section id="about" className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-3 text-center">
        <p className="section-heading">Why teams choose Sentrix</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Security that accelerates, not obstructs</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {valueProps.map((value) => (
          <Card key={value.title} className="bg-white/[0.02]">
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{value.copy}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section id="services" className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-3 text-center">
        <p className="section-heading">Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Full-spectrum coverage</h2>
        <p className="text-base text-foreground/70">
          Build a program tailored to your stage. Select retainers, assessments, or outcome-based sprints.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.title}
            className="border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent transition hover:-translate-y-1 hover:border-primary/40"
          >
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <div className="space-y-3">
                <div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.copy}</CardDescription>
                </div>
                {'what' in service && Array.isArray(service.what) && (
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                      What SMEs get
                    </p>
                    <ul className="list-disc space-y-0.5 pl-4 text-xs text-foreground/75">
                      {service.what.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {'why' in service && (
                  <p className="text-xs text-foreground/70">
                    <span className="font-semibold">Why: </span>
                    {service.why}
                  </p>
                )}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-6xl space-y-8">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <p className="section-heading">How engagements run</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="space-y-3">
              <div className="text-sm font-semibold text-primary/70">Step 0{index + 1}</div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-foreground/70">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-black via-[#140505] to-[#1f0909] p-10 text-center shadow-brand">
      <p className="section-heading">Ready when you are</p>
      <h3 className="mt-6 text-3xl font-semibold text-white">Let’s secure your business together.</h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
        Bring us into your next board prep, product launch, or compliance sprint. We’ll help you prioritize, execute, and report
        with confidence.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link to="/contact">Book a free security audit</Link>
        </Button>

      </div>
    </section>
  </div>
)

export default Home

