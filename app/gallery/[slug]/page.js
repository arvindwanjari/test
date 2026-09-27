import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/app/components/product-card';
import { products, productImage, formatPrice } from '@/lib/products';

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  return { title: product ? `${product.name} — SMRIJA demo` : 'Product not found — SMRIJA' };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  const related = products.filter(item => item.category === product.category && item.slug !== product.slug);
  return (
    <>
      <nav className="product-breadcrumb" aria-label="Breadcrumb"><Link href="/gallery">← Gallery</Link><span aria-hidden="true">/</span><span>{product.name}</span></nav>
      <article className="product-detail">
        <div className={`product-art detail-art tone-${product.tone}`} tabIndex={0} aria-label="Example brand artwork; focus or hover to enlarge">
          <Image src={productImage} alt={`Placeholder SMRIJA artwork for ${product.name}; not a product photograph`} width={800} height={800} sizes="(max-width: 800px) 90vw, 45vw" preload />
          <span className="art-caption">Example artwork · Hover or focus to zoom</span>
        </div>
        <div className="detail-copy">
          <p className="catalog-eyebrow">{product.category} / Demo piece</p>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatPrice(product.price)} <span>Sample price</span></p>
          <dl className="product-specs"><div><dt>Size</dt><dd>{product.size}</dd></div><div><dt>Collection</dt><dd>{product.category}</dd></div><div><dt>Status</dt><dd>Preview only</dd></div></dl>
          <p>This example shows how a SMRIJA product will appear. The name, price, and dimensions are demonstration data; the image is existing brand artwork.</p>
          <a className="catalog-button" href={`https://wa.me/919665007664?text=${encodeURIComponent(`Hello SMRIJA, I saw the demo ${product.name} in your gallery and would like to learn about your upcoming collection.`)}`}>Enquire on WhatsApp <span aria-hidden="true">↗</span></a>
          <Link className="back-to-gallery" href="/gallery">Browse all pieces</Link>
        </div>
      </article>
      <section className="catalog-section"><div className="section-heading"><h2>Explore more</h2></div><div className="product-shelf">{related.map(item => <ProductCard key={item.slug} product={item} />)}</div></section>
    </>
  );
}
