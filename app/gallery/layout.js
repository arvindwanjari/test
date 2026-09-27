import Link from 'next/link';
import './gallery.css';

export default function GalleryLayout({ children }) {
  return (
    <div className="catalog-shell">
      <a className="catalog-skip" href="#catalog-content">Skip to products</a>
      <aside className="catalog-sidebar">
        <Link className="catalog-wordmark" href="/">SMRIJA<span lang="mr">स्मृजा</span></Link>
        <nav aria-label="Main navigation" className="catalog-nav">
          <Link href="/">Home</Link>
          <Link href="/gallery" className="catalog-nav-active">Gallery <span aria-hidden="true">↗</span></Link>
          <a href="https://wa.me/919665007664">WhatsApp <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="sidebar-note"><span lang="mr">वीण आठवणींची.</span><p>A little preview.<br />A world of possibilities.</p></div>
      </aside>
      <main className="catalog-main" id="catalog-content">
        <div className="catalog-topbar"><span>The SMRIJA gallery</span><span className="demo-pill">Demo collection</span></div>
        {children}
        <footer className="catalog-footer">Sample products, prices, and sizes for preview only. Brand artwork is used as a placeholder.</footer>
      </main>
    </div>
  );
}
