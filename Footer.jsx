import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>© {new Date().getFullYear()} Business. All rights reserved.</p>
      </div>
    </footer>
  )
}
