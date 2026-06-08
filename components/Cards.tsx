import { LucideIcon } from 'lucide-react'

export interface ProblemCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ProblemCard({ icon: Icon, title, description }: ProblemCardProps) {
  return (
    <div className="glass-card">
      <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card group hover:scale-105 transition-transform">
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all">
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}

export interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export function TestimonialCard({ quote, author, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="glass-card">
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={author} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700" />
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}

export interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  billing?: 'month' | 'year'
}

export function PricingCard({ name, price, description, features, highlighted = false, ctaText = 'Get Started', billing = 'month' }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 border transition-all ${
        highlighted
          ? 'glass-card border-emerald-500/50 shadow-xl scale-105'
          : 'glass border-white/20 dark:border-slate-700/30'
      }`}
    >
      {highlighted && (
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-slate-600 dark:text-slate-400 text-sm">/{billing}</span>
      </div>
      <button className={`w-full py-2 rounded-lg font-medium transition-colors mb-6 ${
        highlighted
          ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
      }`}>
        {ctaText}
      </button>
      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface KPICardProps {
  label: string
  value: string
  unit?: string
  change?: string
  changePositive?: boolean
  icon?: LucideIcon
}

export function KPICard({ label, value, unit, change, changePositive = true, icon: Icon }: KPICardProps) {
  return (
    <div className="glass-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{value}</span>
            {unit && <span className="text-sm text-slate-600 dark:text-slate-400">{unit}</span>}
          </div>
        </div>
        {Icon && (
          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        )}
      </div>
      {change && (
        <div className={`text-xs font-medium ${changePositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
          {changePositive ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  )
}

export interface RecommendationCardProps {
  icon: LucideIcon
  title: string
  description: string
  impact: string
  actionText?: string
}

export function RecommendationCard({ icon: Icon, title, description, impact, actionText = 'Learn More' }: RecommendationCardProps) {
  return (
    <div className="glass-card border-l-4 border-l-emerald-500">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{description}</p>
      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-3">Potential Impact: {impact}</p>
      <button className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
        {actionText} →
      </button>
    </div>
  )
}

export interface TimelineStepProps {
  step: number
  title: string
  description: string
}

export function TimelineStep({ step, title, description }: TimelineStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
          {step}
        </div>
        {step < 5 && <div className="w-1 h-16 bg-gradient-to-b from-emerald-500/50 to-transparent mt-2" />}
      </div>
      <div className="pb-6">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  )
}
