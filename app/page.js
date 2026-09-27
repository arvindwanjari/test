import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="launch-page">
    <nav className="site-nav" aria-label="Main navigation">
      {/* Destinations pending confirmation. */}
      <ul className="site-nav__list">
        <li><Link className="site-nav__link" href="/gallery">Gallery</Link></li>
        <li><a className="site-nav__link" href="https://wa.me/919665007664" aria-label="Contact SMRIJA on WhatsApp at +91 9665007664">WhatsApp</a></li>
        <li><a className="site-nav__link" role="link" aria-disabled="true">Instagram</a></li>
      </ul>
    </nav>
    <div className="brand">
      <Image className="brand__artwork" src="/Assets/logos/smrija-logo-800.png"
        sizes="(max-width: 600px) 88vw, 460px" width={800} height={800}
        alt="SMRIJA / स्मृजा — वीण आठवणींची. Handloom, heritage, made with love." preload />
    </div>
    <section className="announcement" aria-labelledby="launch-heading">
      <div className="ornament" aria-hidden="true"><span>✧</span></div>
      <p className="announcement__tagline" lang="mr">वीण आठवणींची.</p>
      <h1 id="launch-heading">Launching soon</h1>
    </section>
    <footer className="signature">SMRIJA <span aria-hidden="true">/</span> <span lang="mr">स्मृजा</span></footer>
  </main>
  );
}
