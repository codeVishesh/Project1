import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Valid email required'
    if (!form.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validate()
    if (error) return setStatus({ type: 'error', message: error })

    try {
      // Replace with real endpoint if available
      await new Promise(res => setTimeout(res, 700))
      setStatus({ type: 'success', message: 'Message sent — thank you!' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: 'Error sending message' })
    }
  }

  return (
    <section className="container contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>

        <button type="submit">Send Message</button>

        {status && (
          <div role="status" className={`form-status ${status.type}`}>{status.message}</div>
        )}
      </form>
    </section>
  )
}
