'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { KPICard, RecommendationCard } from '@/components/Cards'
import { TrendingUp, Zap, Leaf, Target, Wind, Droplets } from 'lucide-react'

export default function EnergyPredictor() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    employees: '',
    facilityType: '',
    annualConsumption: '',
    monthlyVariance: '',
    peakHours: '',
    productionType: '',
    productionRate: '',
    seasonalFactors: '',
    lastYearData: '',
    dataQuality: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const formSteps = [
    {
      title: 'Business Information',
      description: 'Tell us about your organization',
      fields: [
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter your company name' },
        { label: 'Industry', name: 'industry', type: 'select', options: ['Manufacturing', 'Technology', 'Retail', 'Healthcare', 'Education', 'Other'], placeholder: 'Select industry' },
        { label: 'Number of Employees', name: 'employees', type: 'select', options: ['1-50', '51-200', '201-1000', '1000+'], placeholder: 'Select range' },
        { label: 'Facility Type', name: 'facilityType', type: 'select', options: ['Office', 'Warehouse', 'Manufacturing', 'Data Center', 'Retail Store', 'Mixed'], placeholder: 'Select type' },
      ]
    },
    {
      title: 'Energy Consumption Data',
      description: 'Provide your current energy usage patterns',
      fields: [
        { label: 'Annual Energy Consumption (kWh)', name: 'annualConsumption', type: 'text', placeholder: 'e.g., 150,000' },
        { label: 'Monthly Variance (%)', name: 'monthlyVariance', type: 'text', placeholder: 'e.g., 25' },
        { label: 'Peak Usage Hours', name: 'peakHours', type: 'text', placeholder: 'e.g., 9am-5pm' },
        { label: 'Current Energy Sources', name: 'productionType', type: 'select', options: ['Grid Only', 'Grid + Solar', 'Grid + Wind', 'Grid + Both', 'Hybrid System'], placeholder: 'Select sources' },
      ]
    },
    {
      title: 'Production Data',
      description: 'Details about your production or operations',
      fields: [
        { label: 'Production Type', name: 'productionType', type: 'text', placeholder: 'e.g., Electronics Assembly' },
        { label: 'Daily Production Rate', name: 'productionRate', type: 'text', placeholder: 'e.g., 1,000 units/day' },
        { label: 'Seasonal Factors', name: 'seasonalFactors', type: 'text', placeholder: 'e.g., 40% higher in summer' },
        { label: 'Equipment Categories', name: 'monthlyVariance', type: 'text', placeholder: 'e.g., HVAC, Motors, Lighting' },
      ]
    },
    {
      title: 'Historical Data',
      description: 'Upload or describe your historical energy records',
      fields: [
        { label: 'Historical Data Available (Months)', name: 'lastYearData', type: 'select', options: ['3-6 months', '6-12 months', '1-2 years', '2+ years'], placeholder: 'Select period' },
        { label: 'Data Quality', name: 'dataQuality', type: 'select', options: ['Excellent', 'Good', 'Fair', 'Poor'], placeholder: 'Select quality' },
        { label: 'Additional Notes', name: 'lastYearData', type: 'text', placeholder: 'Any other relevant information?' },
      ]
    }
  ]

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full">
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ✓ Analysis Complete
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Energy Prediction Results</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Based on your facility data, here's what our AI predicts for your energy future.
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <KPICard
                label="Predicted Monthly Usage"
                value="12,450"
                unit="kWh"
                change="2.3% vs current"
                changePositive={false}
                icon={Zap}
              />
              <KPICard
                label="Estimated Annual Savings"
                value="$28,600"
                change="18% reduction"
                changePositive={true}
                icon={TrendingUp}
              />
              <KPICard
                label="Carbon Footprint"
                value="4.2"
                unit="tons CO2/year"
                change="35% reduction potential"
                changePositive={true}
                icon={Leaf}
              />
              <KPICard
                label="Peak Load Average"
                value="45.2"
                unit="kW"
                change="12% above baseline"
                changePositive={false}
                icon={Target}
              />
              <KPICard
                label="Renewable Potential"
                value="38%"
                change="Achievable with optimization"
                changePositive={true}
                icon={Wind}
              />
              <KPICard
                label="Water Intensity"
                value="2.8"
                unit="L/kWh"
                change="5% improvement possible"
                changePositive={true}
                icon={Droplets}
              />
            </div>

            {/* Recommendations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Recommendations</h2>
              <div className="space-y-4">
                <RecommendationCard
                  icon={Target}
                  title="Optimize HVAC Schedule"
                  description="Shift your peak HVAC usage to off-peak hours. Our analysis shows 25% of your consumption could move to cheaper periods."
                  impact="Save $4,200/year"
                />
                <RecommendationCard
                  icon={Wind}
                  title="Increase Renewable Integration"
                  description="Install 15kW of solar panels to offset your summer peak loads. Weather patterns show high solar potential at your location."
                  impact="Save $6,800/year + carbon offset"
                />
                <RecommendationCard
                  icon={Zap}
                  title="Implement LED Upgrade"
                  description="Replace fluorescent lighting with LED fixtures. Initial cost of $3,500 pays back in 14 months with energy savings."
                  impact="Save $2,500/year"
                />
                <RecommendationCard
                  icon={Leaf}
                  title="Energy Management System"
                  description="Deploy an automated EMS to monitor and control equipment in real-time, eliminating phantom loads and optimizing schedules."
                  impact="Save $3,100/year"
                />
              </div>
            </div>

            {/* Next Steps */}
            <div className="glass-card text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Implement These Changes?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team can help you prioritize and execute these recommendations to maximize your ROI.
              </p>
              <button className="btn-primary inline-block">Schedule Consultation →</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const currentStep = formSteps[step]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Energy Predictor</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Answer a few questions about your facility and we'll predict your energy future with AI.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Step {step + 1} of {formSteps.length}
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {Math.round(((step + 1) / formSteps.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
                style={{ width: `${((step + 1) / formSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{currentStep.title}</h2>
              <p className="text-slate-600 dark:text-slate-400">{currentStep.description}</p>
            </div>

            <div className="space-y-6 mb-8">
              {currentStep.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">{field.label}</label>
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={step === 0}
                className="flex-1 px-4 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {step < formSteps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 px-4 py-3 btn-primary"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-3 btn-primary"
                >
                  Analyze My Energy
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
