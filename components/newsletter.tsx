'use client'

import { Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Using Formbold integration
      const response = await fetch('https://formbold.com/s/3VKy0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'New client',
          email: email,
          subject: 'New Subscription',
          message: 'New client subscription',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl mb-12">
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={loading}
          className="w-full px-6 py-4 bg-muted border border-white/30 rounded-sm text-muted-foreground placeholder-gray-5'.'00 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
          style={{
            animation: 'fadeInUp 1.4s ease-out',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors duration-300 disabled:opacity-50"
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>
      {submitted && (
        <p className="text-primary text-sm mt-2 text-center animate-fadeIn">
          Thank you! We{"'"}ll keep you posted.
        </p>
      )}
      {error && (
        <p className="text-red-400 text-sm mt-2 text-center">
          {error}
        </p>
      )}
    </form>
  )
}
