'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

      <Link href="/" className="font-display text-2xl tracking-[0.4em] uppercase text-obsidian-cream mb-16 block">
        OBSIDIAN
      </Link>

      <div className="w-full max-w-md">

        {/* Toggle */}
        <div className="flex border-b border-obsidian-border mb-10">
          {(['login', 'register'] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setSubmitted(false) }}
              className={`flex-1 pb-4 text-2xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                mode === m
                  ? 'text-obsidian-gold border-b border-obsidian-gold -mb-px'
                  : 'text-obsidian-muted hover:text-obsidian-cream'
              }`}
            >
              {m === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-8 h-px bg-obsidian-gold mx-auto" />
            <p className="font-display text-2xl text-obsidian-cream">
              {mode === 'login' ? 'Welcome back.' : 'Account created.'}
            </p>
            <p className="text-sm text-obsidian-cream/50">
              {mode === 'register'
                ? 'Check your email to confirm your address.'
                : 'You are now signed in.'}
            </p>
            <Link href="/" className="inline-block mt-4 text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5">
              Continue
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors"
              />
            </div>
            {mode === 'login' && (
              <div className="text-right">
                <button type="button" className="text-xs text-obsidian-muted hover:text-obsidian-cream transition-colors">
                  Forgot password?
                </button>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-obsidian-gold hover:bg-obsidian-gold-light text-obsidian-black py-4 tracking-[0.3em] uppercase text-2xs font-medium transition-colors duration-300 mt-2"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-obsidian-border text-center">
          <Link
            href="/shop"
            className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors"
          >
            Continue as guest
          </Link>
        </div>

      </div>
    </div>
  )
}
