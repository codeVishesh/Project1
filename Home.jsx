import React from 'react'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import './Home.css'

const features = [
  { id: 1, title: 'Responsive Design', icon: '📱', text: 'Mobile-first responsive layouts.' },
  { id: 2, title: 'Fast Performance', icon: '⚡', text: 'Optimized for speed and Core Web Vitals.' },
  { id: 3, title: 'SEO Optimized', icon: '🔍', text: 'Semantic HTML and metadata for SEO.' },
  { id: 4, title: 'Accessibility', icon: '♿', text: 'WCAG-friendly patterns and keyboard navigation.' }
]

export default function Home() {
  return (
    <section className="home container">
      <div className="hero">
        <h1>Welcome to Our Business</h1>
        <p className="lead">Providing exceptional services with modern web solutions</p>
      </div>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Our Features</h2>
        <div className="features-grid">
          {features.map(f => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title}>{f.text}</FeatureCard>
          ))}
        </div>
      </section>
    </section>
  )
}
