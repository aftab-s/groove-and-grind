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
            <div className="section-eyebrow">Membership</div>
            <h2 className="sub-title">
              The Record <span className="italic-accent">Club</span>
            </h2>
            <p className="sub-desc">
              A curated monthly shipment of our finest roasts. Like a vinyl
              subscription for your palate — each month, a new side to
              discover.
            </p>
            <ul className="sub-perks">
              <li><span className="perk-icon">✦</span> Exclusive single-origin drops</li>
              <li><span className="perk-icon">✦</span> Roaster's tasting notes</li>
              <li><span className="perk-icon">✦</span> Early limited edition access</li>
              <li><span className="perk-icon">✦</span> Free shipping, every drop</li>
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
                <div className="sub-success-title">You're In, {form.name}</div>
                <p className="sub-success-desc">Welcome to the club. Your first drop ships soon.</p>
              </div>
            ) : (
              <>
                <div className="sub-form-title">Join the Club</div>
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
                    Press Play
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
