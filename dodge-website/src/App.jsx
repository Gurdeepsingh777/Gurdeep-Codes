import { useState } from 'react'
import './App.css'
import heroImg from './assets/hero.jpg'
import sedanImg from './assets/sedan.jpg'
import evImg from './assets/ev.jpg'
import suvImg from './assets/suv.jpg'
import aboutImg from './assets/about.jpg'
import newsModelImg from './assets/news-model.jpg'
import newsEventImg from './assets/news-event.jpg'
import newsAwardImg from './assets/news-award.jpg'
import contactImg from './assets/contact.jpg'
import footerImg from './assets/footer.jpg'

const VEHICLES = [
  {
    id: '001',
    tag: 'Luxury and Comfort',
    title: 'Charger',
    image: sedanImg,
    text: 'Our four-door muscle sedans blend brutal HEMI power with cutting-edge technology, providing a smooth and confident ride. With innovative features and premium materials, the Charger offers a driving experience that sets new standards in the industry.',
  },
  {
    id: '002',
    tag: 'Sustainable Mobility',
    title: 'Charger Daytona EV',
    image: evImg,
    text: 'Experience the future of muscle with our all-electric lineup. Combining eco-friendly innovation with unmistakable Dodge attitude, the Daytona EV delivers emission-free driving without compromising on performance or style.',
  },
  {
    id: '003',
    tag: 'Power and Versatility',
    title: 'Durango',
    image: suvImg,
    text: 'Explore our range of SUVs designed for power, versatility, and adventure. From best-in-class towing to sophisticated urban style, the Durango combines performance and comfort to suit every lifestyle.',
  },
]

const UPDATES = [
  {
    title: 'New Model',
    image: newsModelImg,
    text: 'Introducing our latest model, the Dodge Challenger SRT Hellcat Redeye. This sleek and brutal machine combines supercharged performance with cutting-edge technology, setting new standards in the muscle car segment.',
  },
  {
    title: 'Events',
    image: newsEventImg,
    text: 'Join us at the upcoming Auto Show 2026 where we will be showcasing our new lineup of vehicles. Experience the Dodge difference firsthand and discover the future of American muscle.',
  },
  {
    title: 'Achievements',
    image: newsAwardImg,
    text: 'We are proud to announce that Dodge has been awarded the prestigious Car of the Year award for our commitment to excellence in design, safety, and performance.',
  },
]

const NAV_LINKS = [
  { label: 'Our Vehicles', href: '#vehicles' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        DODGE
      </a>
      <nav className="site-nav">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero-wordmark">DODGE</h1>
      <div className="hero-media">
        <img src={heroImg} alt="Dodge muscle car on a coastal road" />
        <div className="hero-caption">
          <h2>
            Where Muscle
            <br />
            Meets Excellence
          </h2>
          <p>Drive into the future with us</p>
        </div>
        <a className="hero-cta" href="#vehicles">
          Learn More <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

function VehicleRow({ vehicle, flipped }) {
  return (
    <article className={`vehicle-row${flipped ? ' vehicle-row--flipped' : ''}`}>
      <span className="vehicle-index">{vehicle.id}</span>
      <span className="vehicle-tag">{vehicle.tag}</span>
      <div className="vehicle-media">
        <img src={vehicle.image} alt={vehicle.title} />
      </div>
      <div className="vehicle-copy">
        <h3>{vehicle.title}</h3>
        <p>{vehicle.text}</p>
      </div>
    </article>
  )
}

function Vehicles() {
  return (
    <section className="vehicles" id="vehicles">
      <h2 className="section-title">Our Vehicles</h2>
      <div className="vehicle-list">
        {VEHICLES.map((vehicle, index) => (
          <VehicleRow key={vehicle.id} vehicle={vehicle} flipped={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-corner about-corner--left" />
      <div className="about-corner about-corner--right" />
      <h2 className="section-title section-title--dark">About Dodge</h2>
      <p className="about-text">
        At Dodge, we build vehicles for people who love to drive. Our commitment to horsepower,
        design and craftsmanship creates cars that meet today&rsquo;s needs while paving the way for
        a brighter, faster future. With advanced technology and unmistakable attitude, we keep the
        muscle car legend alive. Join us as we redefine modern driving.
      </p>
      <div className="about-media">
        <img src={aboutImg} alt="Dodge vehicle lineup" />
      </div>
    </section>
  )
}

function Updates() {
  return (
    <section className="updates" id="updates">
      <h2 className="section-title">Updates</h2>
      <div className="update-grid">
        {UPDATES.map((item) => (
          <article className="update-card" key={item.title}>
            <div className="update-media">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const EMPTY_CONTACT = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(EMPTY_CONTACT)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(EMPTY_CONTACT)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-media">
        <img src={contactImg} alt="Dodge front grille detail" />
      </div>
      <div className="contact-panel">
        <h2 className="section-title section-title--dark">Get in Touch</h2>
        <p className="contact-subtitle">Reach out to Dodge today</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              First Name*
              <input type="text" required value={form.firstName} onChange={update('firstName')} />
            </label>
            <label>
              Last Name*
              <input type="text" required value={form.lastName} onChange={update('lastName')} />
            </label>
          </div>
          <label>
            Email*
            <input type="email" required value={form.email} onChange={update('email')} />
          </label>
          <label>
            Subject
            <input type="text" value={form.subject} onChange={update('subject')} />
          </label>
          <label>
            Message
            <textarea rows="4" value={form.message} onChange={update('message')} />
          </label>
          <button type="submit">Submit</button>
          {sent && <p className="form-status">Thanks — we&rsquo;ll be in touch soon.</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="footer-banner">
        <img src={footerImg} alt="Dodge sedan on a seaside road" />
      </div>
      <h2 className="footer-wordmark">DODGE</h2>
      <div className="footer-body">
        <div className="footer-links">
          <a href="#top">Home</a>
          <a href="#vehicles">Our Vehicles</a>
          <a href="#contact">Contact</a>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Accessibility Statement</a>
        </div>
        <div className="footer-info">
          <p>123-456-7890</p>
          <p>info@dodge-demo.com</p>
        </div>
        <div className="footer-info">
          <p>1000 Chrysler Drive</p>
          <p>Auburn Hills, MI 48326</p>
        </div>
        <form className="newsletter" onSubmit={handleSubscribe}>
          <h3>Subscribe to Our Newsletter</h3>
          <label>
            Enter your email address*
            <input
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setSubscribed(false)
              }}
            />
          </label>
          <label className="checkbox">
            <input type="checkbox" required />
            <span>Yes, subscribe me to your newsletter.*</span>
          </label>
          <button type="submit">Subscribe</button>
          {subscribed && <p className="form-status">You&rsquo;re on the list.</p>}
        </form>
      </div>
      <p className="footer-legal">© 2035 by Dodge. Demo template — not an official Dodge site.</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Vehicles />
        <About />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
