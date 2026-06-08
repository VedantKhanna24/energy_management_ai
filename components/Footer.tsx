import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-bold text-lg">EcoPredict</span>
            </div>
            <p className="text-sm text-slate-400">Predict your environmental impact with AI.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/energy-predictor" className="text-slate-400 hover:text-white transition-colors">Energy Predictor</Link></li>
              <li><Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sustainability" className="text-slate-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
              />
              <button className="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 EcoPredict AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
