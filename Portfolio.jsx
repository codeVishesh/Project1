import React, { useMemo, useState } from 'react'
import './Portfolio.css'

const sampleProjects = [
  { id: 1, title: 'Project Alpha', tags: ['web','design'], image: '/images/sample1.jpg' },
  { id: 2, title: 'Project Beta', tags: ['app'], image: '/images/sample2.jpg' },
  { id: 3, title: 'Project Gamma', tags: ['web'], image: '/images/sample3.jpg' }
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = useMemo(() => {
    if (filter === 'all') return sampleProjects
    return sampleProjects.filter(p => p.tags.includes(filter))
  }, [filter])

  return (
    <section className="container portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-controls" role="toolbar" aria-label="Filter projects">
        <button onClick={() => setFilter('all')} className={filter==='all'?'active':''}>All</button>
        <button onClick={() => setFilter('web')} className={filter==='web'?'active':''}>Web</button>
        <button onClick={() => setFilter('app')} className={filter==='app'?'active':''}>App</button>
      </div>

      <div className="portfolio-grid">
        {projects.map(p => (
          <article className="portfolio-card" key={p.id}>
            <div className="portfolio-image" aria-hidden>
              <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
            </div>
            <h3>{p.title}</h3>
            <p>Tags: {p.tags.join(', ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
