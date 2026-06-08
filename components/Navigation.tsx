'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass backdrop-blur-md border-b border-white/20 dark:border-slate-700/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            EcoPredict
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link href="/energy-predictor" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Predictor
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/sustainability" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Sustainability
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="btn-secondary text-sm hidden sm:block">Sign In</Link>
          <Link href="/get-started" className="btn-primary text-sm">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}
