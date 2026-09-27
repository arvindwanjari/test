import Link from 'next/link';
export default function ProductNotFound() {
  return <section className="catalog-hero"><p className="catalog-eyebrow">Piece not found</p><h1>Let’s find another.</h1><Link className="catalog-button" href="/gallery">Back to gallery</Link></section>;
}
