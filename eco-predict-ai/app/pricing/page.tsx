'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/Cards'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const prices = {
    monthly: { starter: 299, professional: 799 },
    annual: { starter: 287, professional: 767 },
  }

  const displayPrices = isAnnual ? prices.annual : prices.monthly

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full">
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              💰 Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Plans for Every Business Size
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Start free, scale as you grow. Only pay for what you use with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                !isAnnual
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Annual
              <span className="text-xs bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              name="Starter"
              price={displayPrices.starter}
              description="Perfect for small businesses and pilot projects"
              features={[
                'Up to 5 facilities',
                'Real-time energy monitoring',
                'Monthly predictions',
                'Basic analytics dashboard',
                'Email support',
                'API access',
              ]}
              billing={isAnnual ? 'year' : 'month'}
            />
            <PricingCard
              name="Professional"
              price={displayPrices.professional}
              description="For growing companies with multiple locations"
              features={[
                'Up to 50 facilities',
                'Real-time energy monitoring',
                'Daily AI-powered predictions',
                'Advanced analytics dashboard',
                'Priority email & chat support',
                'Custom integrations',
                'White-label options',
              ]}
              highlighted={true}
              ctaText="Start 30-Day Free Trial"
              billing={isAnnual ? 'year' : 'month'}
            />
            <PricingCard
              name="Enterprise"
              price={0}
              description="Custom solutions for large organizations"
              features={[
                'Unlimited facilities',
                'Real-time monitoring',
                'Hourly AI predictions',
                'Dedicated dashboard',
                '24/7 phone & email support',
                'Custom API builds',
                'Dedicated account manager',
              ]}
              ctaText="Contact Sales"
            />
          </div>

          {/* Feature Comparison */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-8">Detailed Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold">Professional</th>
                    <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="py-4 px-4 font-medium">Facilities Supported</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Energy Predictions</td>
                    <td className="text-center py-4 px-4">Monthly</td>
                    <td className="text-center py-4 px-4">Daily</td>
                    <td className="text-center py-4 px-4">Hourly</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Real-time Monitoring</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Carbon Tracking</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">API Access</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Advanced Analytics</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Custom Integrations</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">White-label Support</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Support Level</td>
                    <td className="text-center py-4 px-4">Email</td>
                    <td className="text-center py-4 px-4">Priority</td>
                    <td className="text-center py-4 px-4">24/7 + Dedicated</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">SLA Guarantee</td>
                    <td className="text-center py-4 px-4">95%</td>
                    <td className="text-center py-4 px-4">99%</td>
                    <td className="text-center py-4 px-4">99.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">Can I change plans anytime?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">Is there a setup fee?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                No setup fees! You can start immediately with your plan. Enterprise customers may have onboarding services included.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">What happens if I exceed my facility limit?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We'll notify you when you&apos;re approaching your limit and offer to upgrade your plan. You won&apos;t be charged unexpectedly.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">Do you offer discounts for annual billing?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes! Annual billing includes a 20% discount. Non-profit organizations also receive a 30% discount on all plans.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">What if I need more help than what's included?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All plans include community support. For additional help, Professional and Enterprise plans offer priority support channels.
              </p>
            </div>
            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-3">Is there a free trial?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Yes! All plans come with a 30-day free trial. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Join hundreds of companies already reducing costs and emissions with EcoPredict.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Start Free Trial →</button>
            <button className="btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
