import { type FormEvent, useState } from 'react'
import { Clock4, Mail, MapPin, PhoneCall } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const FORM_ENDPOINT = 'https://formspree.io/f/xgvgywbg'

const quickContacts = [
  {
    label: 'Email',
    value: 'contact@sentrixai.com',
    icon: Mail,
    href: 'mailto:contact@sentrixai.com',
  },
  { label: 'Phone', value: '01926 935178', icon: PhoneCall, href: 'tel:+01926935178' },
  { label: 'HQ timezone', value: 'UTC +0 / London', icon: MapPin },
  { label: 'Response time', value: '<4 business hours', icon: Clock4 },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      setIsSubmitting(true)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      event.currentTarget.reset()
      toast({
        variant: 'success',
        title: 'Request received',
        description: 'We’ll respond within a few hours with next steps.',
      })
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Please retry or email contact@sentrixai.com directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative z-10 px-6 py-24">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-10">
          <div className="space-y-6">
            <Badge>Let’s collaborate</Badge>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">We respond fast when security can’t wait.</h1>
            <p className="text-base text-foreground/75">
              Sentrix is set up
              to move as quickly as your roadmap. Drop the context below and we&apos;ll follow up with next steps and a tailored
              scope.
            </p>
          </div>
          <Card className="border-white/10 bg-white/[0.02]">
            <CardHeader>
              <CardTitle>Quick contact</CardTitle>
              <CardDescription>Prefer to skip the form? Reach out directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickContacts.map(({ label, value, icon: Icon, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{label}</p>
                    {href ? (
                      <a href={href} className="text-base font-semibold text-white hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-white/10 bg-white/[0.03] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          <CardHeader className="space-y-2">
            <CardTitle>Book a free security audit</CardTitle>
            <CardDescription>
              We&apos;ll reply with a message to confirm and schedule a time to begin the audit process.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <form className="space-y-5" action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Sentrix Cybersecurity" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" name="email" placeholder="you@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" placeholder="+44 415 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Context</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your goals, timeline, or current challenge." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Ideal kickoff timeline</Label>
                <Input id="timeline" name="timeline" placeholder="e.g. Within 2 weeks" />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Share details'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Contact

