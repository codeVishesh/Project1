import React from 'react'
import './FeatureCard.css'

export default function FeatureCard({ icon, title, children }) {
  const id = `feature-${title.replace(/\s+/g, '-')}`
  return (
    <article className="feature-card" aria-labelledby={id}>
      <div className="feature-icon" aria-hidden>{icon}</div>
      <h3 id={id}>{title}</h3>
      <p>{children}</p>
    </article>
  )
}
