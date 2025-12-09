import React from 'react'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
