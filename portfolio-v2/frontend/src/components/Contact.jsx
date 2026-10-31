import React, { useState } from 'react';
import { submitContact } from '../api';
import styles from './Contact.module.css';

const INIT = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const onChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);

    try {
      const res = await submitContact(form);
      setMsg({ type: 'success', text: res.message });
      setForm(INIT);
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className={styles.layout}>
        <div className={styles.info}>
          <p
            style={{
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            Have a project, question, or simply want to
            connect? Feel free to send me a message. I personally read and
            respond to all inquiries.
          </p>

          <div className={styles.detail}>
            <strong>Email:</strong>{' '}
            <a href="mailto:bpananayo@student.apc.edu.ph">
              bpananayo@student.apc.edu.ph
            </a>
          </div>

          <div className={styles.detail}>
            <strong>School:</strong> Asia Pacific College, Philippines
          </div>

          <div className={styles.detail}>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/BRI-09"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/YOUR_GITHUB_USERNAME
            </a>
          </div>

          <div className={styles.detail}>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="www.linkedin.com/in/breneth-ananayo-159516322"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/YOUR_LINKEDIN_PROFILE
            </a>
          </div>

          <div orm}
          onSubmit={onSubmit}
          noValidate
        >
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
              required
              minLength={2}
              disabled={busy}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange}
              required
              disabled={busy}
            />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={onChange}
              required
              minLength={10}
              disabled={busy}
            />
          </div>

          {msg && (
            <div className={`alert alert-${msg.type}`}>
              {msg.text}
            </div>
          )}

          <button
            type="submit"
            className="btn"
            disabled={busy}
            style={{ justifyContent: 'center' }}
          >
            {busy ? (
              <>
                <span className="spinner" /> Sending...
              </>
            ) : (
              'Send Message →'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
