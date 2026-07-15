"use client";

import { FormEvent, useState } from "react";

const services = [
  { number: "01", title: "Gutter Cleaning", text: "Roof, gutter and downspout clearing for homes and commercial properties—with before-and-after photos." },
  { number: "02", title: "Gutter Repair", text: "Leaks, loose gutters, damaged leaders, pitch problems and failing joints fixed before they cause bigger damage." },
  { number: "03", title: "Seamless Gutters", text: "Custom 5- or 6-inch seamless aluminum gutters with larger 3×4 downspouts built for Georgia rain." },
  { number: "04", title: "Gutter Guards", text: "Low-profile leaf protection that keeps debris out without attaching to your roof or spoiling the curb appeal." },
];

const testimonials = [
  ["Berlíce B.", "A+ service", "Professional, on time, and completed the cleaning quickly. They made time to fit me in and are now my go-to for gutter issues."],
  ["Keturah H.", "Responsive and thorough", "Kalvin was responsive and got the job done quickly. The before-and-after photos made it easy to see the difference."],
  ["Lucy Bell", "The proof is in the photos", "They do a great job. I love that they take before-and-after photos so we can see the transformation."],
];

const faqs = [
  ["How do I get a free estimate?", "Call 678-409-3947 or complete the quote form. A K&R gutter specialist will review your needs and provide a clear written estimate."],
  ["How often should gutters be cleaned?", "Most Metro Atlanta homes benefit from cleaning and inspection at least twice a year. Homes surrounded by mature trees may need three or four visits."],
  ["Do I need to be home?", "No. You will receive a service window, and the crew can complete most gutter cleaning work without you being present."],
  ["Are you insured?", "Yes. K&R Gutters Inc is fully insured and stands behind the quality of its work."],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="K and R Gutters home">
          <strong>K<span>&amp;</span>R</strong><small>GUTTERS INC</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#guards">Gutter Guards</a><a href="#work">Our Work</a><a href="#about">Why K&amp;R</a><a href="#areas">Service Areas</a>
        </nav>
        <div className="header-actions"><a className="phone-link" href="tel:+16784093947">☎ 678-409-3947</a><a className="button small" href="#quote">Get My Free Quote</a></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Metro Atlanta&apos;s gutter specialists</p>
          <h1>Protect Your Home From Costly Water Damage</h1>
          <div className="orange-rule" />
          <p className="hero-lede">Expert gutter cleaning, seamless gutter installation and gutter guards for homeowners across Metro Atlanta.</p>
          <div className="hero-actions"><a className="button" href="#quote">Get My Free Quote</a><a className="button outline" href="tel:+16784093947">Call 678-409-3947</a></div>
          <div className="trust-row"><span>✓ Licensed &amp; Insured</span><span>✓ Family-Owned</span><span>✓ Metro Atlanta</span></div>
        </div>
        <aside className="promise"><b>30</b><strong>Minute Quote Promise</strong><i /> <p>Get a fast, clear estimate—without the runaround.</p></aside>
      </section>

      <section className="intro" id="about">
        <div><p className="eyebrow">Gutter services you can count on</p><h2>Built to protect.<br />Built to last.</h2></div>
        <div><p>Georgia storms don&apos;t wait. Neither should a gutter problem. K&amp;R Gutters helps homeowners prevent foundation damage, roof rot and landscape erosion with responsive service and proven workmanship.</p><div className="proof"><strong>Fully insured</strong><strong>Warranty offered</strong><strong>Small jobs welcome</strong></div></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="eyebrow">One trusted local team</p><h2>Everything your gutters need</h2><p>From seasonal maintenance to a complete new system, get the right solution—not an expensive upsell.</p></div>
        <div className="service-grid">{services.map((service) => <article key={service.title}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#quote">Request this service →</a></article>)}</div>
      </section>

      <section className="guards" id="guards">
        <div className="guards-image" role="img" aria-label="Clean black seamless gutter installed on a home" />
        <div className="guards-copy"><p className="eyebrow light">Leaf protection that works</p><h2>Stop cleaning the same gutters over and over.</h2><p>K&amp;R installs a discreet gutter cover system designed to keep debris out, handle heavy rainfall and protect the roof warranty.</p><ul><li>Low-profile design you can&apos;t see from the ground</li><li>Doesn&apos;t attach to or penetrate the roof</li><li>Built for heavy Georgia rainfall</li><li>10-year clog-free product warranty</li></ul><a className="button" href="#quote">Get a Gutter Guard Quote</a></div>
      </section>

      <section className="process section">
        <div className="section-heading"><p className="eyebrow">No runaround. No guesswork.</p><h2>Your quote in three simple steps</h2></div>
        <div className="steps"><article><b>1</b><h3>Tell us what&apos;s happening</h3><p>Call or send the short form with your address and service needed.</p></article><article><b>2</b><h3>Get a clear estimate</h3><p>Receive a straightforward quote with the recommended solution.</p></article><article><b>3</b><h3>Approve your service</h3><p>Choose a convenient time and let the insured K&amp;R crew handle the rest.</p></article></div>
      </section>

      <section className="work" id="work"><div className="work-copy"><p className="eyebrow light">Real work. Visible results.</p><h2>See the difference before you pay.</h2><p>Customers receive before-and-after photos, so even when you&apos;re not home, you can see exactly what was completed.</p><a className="text-link" href="#quote">Get the same peace of mind →</a></div><div className="project-grid"><div className="project one"/><div className="project two"/><div className="project three"/></div></section>

      <section className="reviews section"><div className="section-heading"><p className="eyebrow">Trusted by Metro Atlanta homeowners</p><h2>Service people recommend</h2></div><div className="review-grid">{testimonials.map(([name, title, review]) => <blockquote key={name}><div className="stars">★★★★★</div><h3>{title}</h3><p>“{review}”</p><footer>{name}</footer></blockquote>)}</div></section>

      <section className="areas" id="areas"><div><p className="eyebrow light">Proudly serving Metro Atlanta</p><h2>Your local gutter team is one call away.</h2><p>Serving homeowners and commercial properties throughout Atlanta and surrounding Georgia communities.</p></div><div className="area-list"><span>Atlanta</span><span>Marietta</span><span>Decatur</span><span>Alpharetta</span><span>Sandy Springs</span><span>Roswell</span><span>Smyrna</span><span>Surrounding Areas</span></div></section>

      <section className="quote-section" id="quote">
        <div className="quote-copy"><p className="eyebrow">Fast, free and straightforward</p><h2>Get your gutter quote today.</h2><p>Tell us what you need. K&amp;R will follow up with the next step—often in 30 minutes or less during business hours.</p><a className="direct-call" href="tel:+16784093947"><small>Prefer to call?</small><strong>678-409-3947</strong></a><p className="hours">Monday–Saturday · 8:00 AM–8:00 PM</p></div>
        <form onSubmit={submitQuote} aria-label="Free gutter quote form">
          {sent ? <div className="success" role="status"><b>Request received.</b><p>Thank you. K&amp;R Gutters will contact you shortly.</p><button type="button" onClick={() => setSent(false)}>Send another request</button></div> : <><div className="field-row"><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" autoComplete="tel" inputMode="tel" placeholder="(404) 555-0123" /></label></div><div className="field-row"><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label><label>ZIP code<input required name="zip" inputMode="numeric" placeholder="30301" /></label></div><label>Service needed<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Gutter Cleaning</option><option>Gutter Repair</option><option>Seamless Gutter Installation</option><option>Gutter Guards</option><option>Not Sure</option></select></label><label>How can we help?<textarea name="message" rows={4} placeholder="Tell us about your gutter problem..." /></label><button className="button form-button" type="submit">Request My Free Quote</button><small className="privacy">No spam. Your details are only used to respond to this request.</small></>}
        </form>
      </section>

      <section className="faq section"><div className="section-heading"><p className="eyebrow">Helpful answers</p><h2>Questions homeowners ask</h2></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <footer><a className="brand footer-brand" href="#top"><strong>K<span>&amp;</span>R</strong><small>GUTTERS INC</small></a><p>Professional gutter cleaning, repair, installation and leaf protection across Metro Atlanta.</p><div><a href="tel:+16784093947">678-409-3947</a><a href="mailto:krgutters@gmail.com">krgutters@gmail.com</a></div><small>© 2026 K&amp;R Gutters Inc. All rights reserved. · Demo redesign for client presentation.</small></footer>
      <a className="mobile-call" href="tel:+16784093947">Call for a Free Quote</a>
    </main>
  );
}
