import * as React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { submitToAirtable } from '@/lib/airtable'

function Careers() {
  const { toast } = useToast()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      await submitToAirtable('Careers', {
        Name: name,
        Email: email,
        Message: message,
      })

      toast({
        title: 'Application submitted',
        description: 'We have received your application and will be in touch soon.',
        variant: 'success',
      })

      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      toast({
        title: 'Something went wrong',
        description: 'There was an issue submitting your application. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-16">
      <Card>
        <CardHeader>
          <CardTitle>Careers at Sentrix Cybersecurity</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit application'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Careers


