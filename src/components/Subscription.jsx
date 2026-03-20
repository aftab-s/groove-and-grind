import { useState } from 'react';
import { motion } from 'framer-motion';
import './Subscription.css';

export default function Subscription() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email) setDone(true);
  };

  return (
    <section className="subscription-section" id="record-club">
      <div className="container">
        <motion.div
          className="subscription-card"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sub-copy">
            <div className="section-eyebrow">Morning Circle</div>
            <h2 className="sub-title">
              The Gentle <span className="italic-accent">Circle</span>
            </h2>
            <p className="sub-desc">
              A monthly coffee ritual for peaceful mornings. Receive floral
              single-origin roasts, calming tasting notes, and a soft playlist
              made to pair with your first cup.
            </p>
            <ul className="sub-perks">
              <li><span className="perk-icon">✦</span> Monthly floral single-origin coffee</li>
              <li><span className="perk-icon">✦</span> Handwritten brew and tasting guide</li>
              <li><span className="perk-icon">✦</span> Curated mellow music pairing</li>
              <li><span className="perk-icon">✦</span> Complimentary shipping each month</li>
            </ul>
          </div>

          <motion.div
            className="sub-form-wrap"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {done ? (
              <div className="sub-success">
                <div className="sub-success-icon">♫</div>
                <div className="sub-success-title">Welcome, {form.name}</div>
                <p className="sub-success-desc">Your first peaceful coffee drop is on its way.</p>
              </div>
            ) : (
              <>
                <div className="sub-form-title">Join Morning Circle</div>
                <form onSubmit={submit}>
                  <div className="sub-form-group">
                    <label className="sub-form-label" htmlFor="sub-name">Name</label>
                    <input id="sub-name" className="sub-form-input" type="text" name="name"
                      placeholder="Your name" value={form.name} onChange={handle} required />
                  </div>
                  <div className="sub-form-group">
                    <label className="sub-form-label" htmlFor="sub-email">Email</label>
                    <input id="sub-email" className="sub-form-input" type="email" name="email"
                      placeholder="you@email.com" value={form.email} onChange={handle} required />
                  </div>
                  <button type="submit" className={`sub-btn ${done ? 'done' : ''}`}>
                    Reserve My Spot
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
