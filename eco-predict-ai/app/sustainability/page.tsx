import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FeatureCard } from '@/components/Cards'
import { Leaf, Wind, Droplets, Zap, BarChart3, Globe } from 'lucide-react'

export default function Sustainability() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full">
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              🌍 Our Commitment to the Planet
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Sustainability at the Core</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            We believe that profitable businesses and environmental responsibility go hand in hand. EcoPredict empowers companies to reduce their environmental impact while improving their bottom line.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                To democratize energy intelligence and enable every organization—from small businesses to large enterprises—to understand, predict, and optimize their environmental impact.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                We're committed to helping companies achieve their sustainability goals while reducing operational costs, creating a win-win scenario for business and the environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center">
                <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">15M</p>
                <p className="text-sm font-medium">Tons CO2 Offset</p>
              </div>
              <div className="glass-card text-center">
                <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">$280M</p>
                <p className="text-sm font-medium">Energy Costs Saved</p>
              </div>
              <div className="glass-card text-center">
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</p>
                <p className="text-sm font-medium">Companies Transformed</p>
              </div>
              <div className="glass-card text-center">
                <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">98%</p>
                <p className="text-sm font-medium">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Framework */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sustainability Framework</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We approach sustainability through three interconnected pillars that drive measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Leaf}
              title="Carbon Neutrality"
              description="Help organizations measure and reduce their carbon footprint while transitioning to renewable energy sources."
            />
            <FeatureCard
              icon={Zap}
              title="Energy Efficiency"
              description="Identify and eliminate energy waste through AI-powered optimization and predictive maintenance."
            />
            <FeatureCard
              icon={Globe}
              title="Resource Conservation"
              description="Minimize water usage, waste generation, and environmental impact across all operations."
            />
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">UN Sustainable Development Goals</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              EcoPredict directly supports multiple UN SDGs through our platform and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">7</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Affordable & Clean Energy (SDG 7)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We help businesses transition to renewable energy and improve energy efficiency, enabling sustainable energy access.
              </p>
            </div>
            <div className="glass-card">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">12</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Responsible Consumption (SDG 12)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our platform promotes responsible resource use by identifying and eliminating waste and inefficiency.
              </p>
            </div>
            <div className="glass-card">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">13</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Climate Action (SDG 13)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We empower organizations to take meaningful climate action by reducing emissions and carbon footprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact By The Numbers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Impact By The Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card text-center p-8">
              <p className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">15M</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Tons of CO2 Offset</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Equivalent to planting 250M trees</p>
            </div>
            <div className="glass-card text-center p-8">
              <p className="text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">$280M</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer Savings</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Average 28% reduction in energy costs</p>
            </div>
            <div className="glass-card text-center p-8">
              <p className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">35B</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">kWh Optimized</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Through predictive intelligence</p>
            </div>
            <div className="glass-card text-center p-8">
              <p className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-3">500+</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Companies</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Across 45 countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our 2030 Commitment</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            By 2030, we commit to helping our customers offset 50 million tons of CO2, save $500 million in energy costs, and transition 80% of our customer base to renewable-powered operations.
          </p>
          <button className="btn-primary inline-block text-lg">Join Our Sustainability Movement →</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
