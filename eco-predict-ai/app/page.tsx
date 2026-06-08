import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProblemCard, FeatureCard, TestimonialCard, TimelineStep } from '@/components/Cards'
import { TrendingUp, BarChart3, Zap, Target, Leaf, AlertCircle, Droplets, Wind, Gauge } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full">
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                🌱 Welcome to Sustainable Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
              <span className="gradient-text">Predict Your Environmental Impact</span>
              <br /> with AI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-balance">
              Transform your business with accurate energy predictions and sustainability insights. Make smarter decisions, reduce emissions, and drive profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Predicting →</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card text-center">
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">98%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Prediction Accuracy</p>
            </div>
            <div className="glass-card text-center">
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">500+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Companies Trust Us</p>
            </div>
            <div className="glass-card text-center">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">40%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Avg. Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Challenge Today</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Businesses struggle with energy management and carbon footprint tracking in an increasingly regulated world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProblemCard
              icon={AlertCircle}
              title="Hidden Energy Waste"
              description="Most businesses don't know where their energy is going or how to optimize consumption patterns."
            />
            <ProblemCard
              icon={BarChart3}
              title="Unpredictable Costs"
              description="Energy expenses fluctuate unpredictably, making budgeting and financial forecasting nearly impossible."
            />
            <ProblemCard
              icon={Droplets}
              title="Carbon Compliance Risk"
              description="Increasing regulations require accurate emissions tracking, but manual methods are error-prone and costly."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI-Powered Solution</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              EcoPredict uses machine learning to analyze your energy patterns and predict future consumption with remarkable accuracy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Energy Forecasting"
              description="Predict energy consumption weeks in advance with 98% accuracy using historical data and AI models."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Real-Time Insights"
              description="Monitor your energy usage in real-time and get instant alerts when consumption exceeds thresholds."
            />
            <FeatureCard
              icon={Target}
              title="Sustainability Goals"
              description="Set carbon reduction targets and track progress with our integrated sustainability dashboard."
            />
            <FeatureCard
              icon={Gauge}
              title="Cost Optimization"
              description="Identify cost-saving opportunities and shift usage to cheaper time periods automatically."
            />
            <FeatureCard
              icon={Leaf}
              title="Carbon Tracking"
              description="Calculate and track your carbon footprint with precision, enabling accurate ESG reporting."
            />
            <FeatureCard
              icon={Wind}
              title="Renewable Integration"
              description="Optimize renewable energy usage by predicting when solar and wind generation will peak."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Get up and running in just 4 steps with our simple onboarding process.
            </p>
          </div>
          <div className="space-y-4">
            <TimelineStep
              step={1}
              title="Connect Your Data"
              description="Link your energy meters and existing utility data through our secure API or manual upload."
            />
            <TimelineStep
              step={2}
              title="Train Your Model"
              description="Our AI analyzes 6-12 months of historical data to build your personalized prediction model."
            />
            <TimelineStep
              step={3}
              title="Get Insights"
              description="Receive daily predictions, anomaly alerts, and AI-powered recommendations to reduce consumption."
            />
            <TimelineStep
              step={4}
              title="Optimize & Save"
              description="Implement recommendations to reduce energy costs and carbon emissions while maintaining operations."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Industry Leaders</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See how companies across industries are transforming their operations with EcoPredict.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="EcoPredict helped us reduce energy costs by 35% while meeting our carbon targets. The predictions are incredibly accurate."
              author="Sarah Chen"
              role="CEO"
              company="GreenTech Manufacturing"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            />
            <TestimonialCard
              quote="The real-time insights changed how we manage our data centers. We've cut power consumption without sacrificing performance."
              author="Marcus Johnson"
              role="CTO"
              company="CloudScale Inc"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
            />
            <TestimonialCard
              quote="EcoPredict's AI models are so accurate, we were able to optimize our renewable integration perfectly. Couldn't recommend it more."
              author="Elena Rodriguez"
              role="Sustainability Officer"
              company="EnergyPlus Corp"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Energy Management?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Join hundreds of companies reducing costs and emissions with AI-powered insights.
          </p>
          <button className="btn-primary inline-block text-lg">Start Free Trial →</button>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">No credit card required • 30-day free trial • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
