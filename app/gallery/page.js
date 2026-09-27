import ProductCard from '@/app/components/product-card';
import { products } from '@/lib/products';

export const metadata = { title: 'Gallery — SMRIJA', description: 'Explore the SMRIJA demo product gallery, with sample prices and sizes.' };

export default function GalleryPage() {
  return (
    <>
      <header className="catalog-hero">
        <p className="catalog-eyebrow">Explore / Discover / Make it yours</p>
        <h1>Woven into<br /><em>your everyday.</em></h1>
        <p>A preview of what’s to come. Explore our sample collection.</p>
      </header>
      <nav className="category-links" aria-label="Product categories">
        <a href="#all-products">All pieces</a><a href="#sarees">Sarees</a><a href="#stoles">Stoles</a><a href="#dupattas">Dupattas</a>
      </nav>
      <section id="all-products" className="catalog-section">
        <div className="section-heading"><h2>Made for your collection</h2><span>{products.length} sample pieces</span></div>
        <div className="product-grid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div>
      </section>
      {['Sarees', 'Stoles', 'Dupattas'].map(category => (
        <section className="catalog-section" id={category.toLowerCase()} key={category}>
          <div className="section-heading"><h2>{category}</h2><a href="#all-products">View all pieces ↑</a></div>
          <div className="product-shelf">{products.filter(product => product.category === category).map(product => <ProductCard key={product.slug} product={product} />)}</div>
        </section>
      ))}
    </>
  );
}
