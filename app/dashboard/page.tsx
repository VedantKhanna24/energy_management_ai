'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { KPICard } from '@/components/Cards'
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Zap, TrendingUp, Leaf, Target } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', consumption: 14500, prediction: 14200, renewable: 2100 },
  { month: 'Feb', consumption: 13800, prediction: 13900, renewable: 2300 },
  { month: 'Mar', consumption: 12100, prediction: 12400, renewable: 3200 },
  { month: 'Apr', consumption: 11200, prediction: 11500, renewable: 4100 },
  { month: 'May', consumption: 10800, prediction: 10900, renewable: 5200 },
  { month: 'Jun', consumption: 15300, prediction: 15100, renewable: 6800 },
  { month: 'Jul', consumption: 16200, prediction: 16100, renewable: 7100 },
  { month: 'Aug', consumption: 15800, prediction: 15900, renewable: 6900 },
  { month: 'Sep', consumption: 13400, prediction: 13600, renewable: 5100 },
  { month: 'Oct', consumption: 11900, prediction: 12100, renewable: 3800 },
  { month: 'Nov', consumption: 12700, prediction: 12500, renewable: 2400 },
  { month: 'Dec', consumption: 14900, prediction: 15000, renewable: 2000 },
]

const costData = [
  { month: 'Jan', cost: 1914, savings: 142 },
  { month: 'Feb', cost: 1824, savings: 276 },
  { month: 'Mar', cost: 1600, savings: 396 },
  { month: 'Apr', cost: 1482, savings: 522 },
  { month: 'May', cost: 1425, savings: 681 },
  { month: 'Jun', cost: 2020, savings: 945 },
  { month: 'Jul', cost: 2140, savings: 1064 },
  { month: 'Aug', cost: 2088, savings: 1035 },
  { month: 'Sep', cost: 1771, savings: 816 },
  { month: 'Oct', cost: 1573, savings: 568 },
  { month: 'Nov', cost: 1680, savings: 372 },
  { month: 'Dec', cost: 1969, savings: 228 },
]

const emissionsData = [
  { month: 'Jan', emissions: 4.93, target: 3.5 },
  { month: 'Feb', emissions: 4.70, target: 3.5 },
  { month: 'Mar', emissions: 4.12, target: 3.5 },
  { month: 'Apr', emissions: 3.81, target: 3.5 },
  { month: 'May', emissions: 3.67, target: 3.5 },
  { month: 'Jun', emissions: 5.21, target: 3.5 },
  { month: 'Jul', emissions: 5.51, target: 3.5 },
  { month: 'Aug', emissions: 5.37, target: 3.5 },
  { month: 'Sep', emissions: 4.56, target: 3.5 },
  { month: 'Oct', emissions: 4.05, target: 3.5 },
  { month: 'Nov', emissions: 4.32, target: 3.5 },
  { month: 'Dec', emissions: 5.07, target: 3.5 },
]

const sourceData = [
  { name: 'Grid', value: 62, color: '#0ea5e9' },
  { name: 'Solar', value: 22, color: '#10b981' },
  { name: 'Wind', value: 10, color: '#06b6d4' },
  { name: 'Other', value: 6, color: '#8b5cf6' },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Energy Dashboard</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real-time monitoring and AI-powered insights for your energy operations.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <KPICard
              label="Monthly Usage"
              value="13,450"
              unit="kWh"
              change="2.3% vs last month"
              changePositive={false}
              icon={Zap}
            />
            <KPICard
              label="YTD Savings"
              value="$8,045"
              change="15.2% reduction"
              changePositive={true}
              icon={TrendingUp}
            />
            <KPICard
              label="Carbon Footprint"
              value="48.3"
              unit="tons CO2/year"
              change="22% vs target"
              changePositive={false}
              icon={Leaf}
            />
            <KPICard
              label="Renewable %"
              value="32%"
              change="Up from 28% last month"
              changePositive={true}
              icon={Target}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Consumption vs Prediction */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-6">Consumption vs Prediction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                  <Legend />
                  <Line type="monotone" dataKey="consumption" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="prediction" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Cost Savings */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-6">Cost & Savings</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                  <Legend />
                  <Bar dataKey="cost" fill="#0ea5e9" />
                  <Bar dataKey="savings" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Emissions Tracking */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-6">Carbon Emissions vs Target</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={emissionsData}>
                  <defs>
                    <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                  <Legend />
                  <Area type="monotone" dataKey="emissions" stroke="#ef4444" fillOpacity={1} fill="url(#colorEmissions)" />
                  <Area type="monotone" dataKey="target" stroke="#10b981" fillOpacity={1} fill="url(#colorTarget)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Energy Source Mix */}
            <div className="glass-card flex items-center justify-center">
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-6">Energy Source Mix</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="glass-card">
            <h3 className="text-lg font-semibold mb-6">AI Insights & Alerts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-400">Consumption Pattern Detected</p>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">Your facility is consuming 18% more energy during lunch hours (12-1pm). Consider adjusting HVAC schedules during this period.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-400">Renewable Energy Peak</p>
                  <p className="text-sm text-green-800 dark:text-green-300 mt-1">Solar output will peak tomorrow between 2-4pm. We recommend scheduling energy-intensive tasks during this window.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="w-2 h-2 mt-2 bg-amber-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-medium text-amber-900 dark:text-amber-400">Anomaly Detected</p>
                  <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">Equipment in Sector 3 is consuming 35% more than expected. This may indicate a malfunction. Please investigate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
