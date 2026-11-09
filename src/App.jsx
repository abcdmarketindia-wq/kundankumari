import { useEffect, useState } from 'react'
import './App.css'

const EMAIL = 'kundankumar@gmail.com'
const COURSE = 'Digital Marketing Course (₹5,999)'
const YEAR = new Date().getFullYear()

const QUERIES = [
  'affordable seo services',
  'digital marketing course',
  'rank my business on google',
]

const MODULES = [
  ['SEO fundamentals', 'Keywords, on-page, links and how search really works.'],
  ['Google Ads', 'Campaign setup, bidding and budgets that do not leak.'],
  ['Social media marketing', 'Content and paid campaigns on Instagram and Facebook.'],
  ['Content marketing', 'Writing pages and posts people search for and share.'],
  ['Email & WhatsApp', 'Lists, follow-ups and simple automated sequences.'],
  ['Analytics', 'Read Google Analytics and Search Console with confidence.'],
]

const SEO_PLANS = [
  {
    name: 'On-Page SEO',
    pitch: 'Make the pages you already have easier to find.',
    items: ['Keyword research', 'Titles and meta descriptions', 'Headings and internal links', 'Content recommendations'],
  },
  {
    name: 'Local SEO',
    pitch: 'Show up when nearby customers search for you.',
    items: ['Google Business Profile setup', 'Local keyword targeting', 'Business listings cleanup', 'Review strategy'],
  },
  {
    name: 'Technical SEO Audit',
    pitch: 'Find and prioritise what is holding your site back.',
    items: ['Crawl and indexing check', 'Page speed review', 'Mobile usability review', 'Prioritised fix list'],
  },
  {
    name: 'Off-Page SEO',
    pitch: 'Build authority from relevant, real websites.',
    items: ['Backlink profile review', 'Competitor link research', 'Quality link outreach', 'Progress report'],
  },
]

const MORE_SERVICES = [
  ['Social Media Management', 'Planned posts and steady engagement for your brand.'],
  ['Google Ads Management', 'Search campaigns built around enquiries and sales.'],
  ['Meta Ads', 'Targeted Facebook and Instagram campaigns.'],
  ['Content Writing', 'Blogs and website copy written for search and for people.'],
  ['Website Design', 'Fast, mobile-friendly sites that are ready for SEO.'],
]

const STEPS = [
  ['Tell me your goal', 'Send your website and what you want to achieve.'],
  ['Get a clear plan', 'You see what will be done and what it costs.'],
  ['The work gets done', 'Your plan is carried out, with updates as it moves.'],
  ['Review the results', 'See what changed and decide what comes next.'],
]

const FAQS = [
  ['Do you guarantee a #1 ranking on Google?', 'No, and you should be careful of anyone who does. Nobody controls Google’s results. The work focuses on the things that genuinely improve your visibility, and you will always know what was done.'],
  ['How soon will I see SEO results?', 'SEO builds over time. Technical and on-page fixes can help sooner, while competitive keywords often take several months.'],
  ['Who is the digital marketing course for?', 'Students, job seekers, freelancers and business owners. You do not need any marketing experience to start.'],
  ['Can I take more than one service?', 'Yes. Mention everything you need in your enquiry and you will get one combined plan.'],
  ['How do I get started?', 'Fill in the enquiry form or email ' + EMAIL + ' with your requirements.'],
]

function useRotatingQuery() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % QUERIES.length), 3000)
    return () => clearInterval(id)
  }, [])
  return QUERIES[index]
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="logo" href="#top" onClick={close}>
          <span className="logo-mark" aria-hidden="true">K</span>
          Kundan Kumar
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          <a href="#course" onClick={close}>Course</a>
          <a href="#seo" onClick={close}>SEO Services</a>
          <a href="#more" onClick={close}>More Services</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a className="btn btn-small" href="#contact" onClick={close}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const query = useRotatingQuery()
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">SEO services &amp; digital marketing training</p>
          <h1>Get found online. <em>Or learn how to do it yourself.</em></h1>
          <p className="lead">
            Practical SEO for growing businesses from ₹4,999, and a complete
            digital marketing course for ₹5,999.
          </p>
          <div className="actions">
            <a className="btn" href="#seo">See SEO services</a>
            <a className="btn btn-ghost" href="#course">Explore the course</a>
          </div>
        </div>

        <div className="serp" aria-label="Quick links to services">
          <div className="search-bar" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.8-3.8" />
            </svg>
            <span key={query} className="query">{query}</span>
          </div>
          <a className="result" href="#seo">
            <span className="rank">1</span>
            <span>
              <small>Kundan Kumar › SEO</small>
              <strong>SEO Services from ₹4,999</strong>
              <span className="snippet">On-page, local, technical and off-page SEO.</span>
            </span>
          </a>
          <a className="result" href="#course">
            <span className="rank">2</span>
            <span>
              <small>Kundan Kumar › Course</small>
              <strong>Digital Marketing Course at ₹5,999</strong>
              <span className="snippet">Six practical modules for complete beginners.</span>
            </span>
          </a>
          <div className="result ghost" aria-hidden="true">
            <span className="rank">3</span>
            <span className="bars"><i /><i /><i /></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Course({ onEnquire }) {
  return (
    <section className="section course" id="course">
      <div className="wrap course-grid">
        <div>
          <p className="eyebrow">The course</p>
          <h2>Digital Marketing Course</h2>
          <p className="section-lead">
            Learn the skills businesses actually pay for, from your first
            keyword to reading your first campaign report.
          </p>
          <div className="course-price">
            <span className="price">₹5,999</span>
            <span>Beginner friendly</span>
          </div>
          <a className="btn btn-light" href="#contact" onClick={() => onEnquire(COURSE)}>
            Enquire about the course
          </a>
        </div>
        <ol className="modules">
          {MODULES.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function SeoServices({ onEnquire }) {
  return (
    <section className="section" id="seo">
      <div className="wrap">
        <p className="eyebrow">SEO services</p>
        <h2>One simple price: ₹4,999 per service</h2>
        <p className="section-lead">Pick the area your website needs most, or combine them.</p>
        <div className="plans">
          {SEO_PLANS.map((plan) => {
            const label = `${plan.name} (₹4,999)`
            return (
              <article className="plan" key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="plan-pitch">{plan.pitch}</p>
                <p className="price">₹4,999</p>
                <ul>
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="btn btn-ghost" href="#contact" onClick={() => onEnquire(label)}>
                  Choose {plan.name}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MoreServices({ onEnquire }) {
  return (
    <section className="section tinted" id="more">
      <div className="wrap more-grid">
        <div>
          <p className="eyebrow">And more</p>
          <h2>Everything else your marketing needs</h2>
          <p className="section-lead">Priced to fit your project. Ask for a free quote.</p>
        </div>
        <ul className="more-list">
          {MORE_SERVICES.map(([name, text]) => (
            <li key={name}>
              <a href="#contact" onClick={() => onEnquire(name)}>
                <span>
                  <strong>{name}</strong>
                  <small>{text}</small>
                </span>
                <span className="quote">Get a quote →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <p className="eyebrow">How it works</p>
        <h2>From first message to results</h2>
        <ol className="steps">
          {STEPS.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section tinted" id="faq">
      <div className="wrap faq-wrap">
        <p className="eyebrow">Questions</p>
        <h2>Good to know</h2>
        <div className="faqs">
          {FAQS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ service, setService }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = `Enquiry: ${service || 'General'} from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not given'}`,
      `Interested in: ${service || 'General enquiry'}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s get your business found</h2>
          <p className="section-lead">Tell me what you need and I’ll get back to you by email.</p>
          <a className="email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" className="copy" onClick={copy}>
            {copied ? 'Copied!' : 'Copy email address'}
          </button>
        </div>

        <form className="form" onSubmit={submit}>
          <label>
            Your name
            <input name="name" required autoComplete="name" value={form.name} onChange={update} />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" value={form.email} onChange={update} />
          </label>
          <label>
            Phone (optional)
            <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} />
          </label>
          <label>
            I’m interested in
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">General enquiry</option>
              <option>{COURSE}</option>
              {SEO_PLANS.map((p) => <option key={p.name}>{`${p.name} (₹4,999)`}</option>)}
              {MORE_SERVICES.map(([name]) => <option key={name}>{name}</option>)}
            </select>
          </label>
          <label className="full">
            Message
            <textarea name="message" rows="4" required value={form.message} onChange={update} />
          </label>
          <button className="btn full" type="submit">Send enquiry</button>
          <p className="form-note full" role="status">
            {sent
              ? `Your email app should now be open with this message ready to send. If it didn’t open, email ${EMAIL} directly.`
              : 'This opens your email app with your message filled in.'}
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <span>© {YEAR} Kundan Kumar</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [service, setService] = useState('')
  return (
    <>
      <a className="skip" href="#course">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Course onEnquire={setService} />
        <SeoServices onEnquire={setService} />
        <MoreServices onEnquire={setService} />
        <Process />
        <Faq />
        <Contact service={service} setService={setService} />
      </main>
      <Footer />
    </>
  )
}
