import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, productImage } from '@/lib/products';

export default function ProductCard({ product }) {
  return (
    <Link className="product-card" href={`/gallery/${product.slug}`}>
      <div className={`product-art tone-${product.tone}`}>
        <Image src={productImage} alt={`${product.name}: placeholder SMRIJA artwork`} width={800} height={800} sizes="(max-width: 600px) 85vw, (max-width: 1000px) 40vw, 24vw" />
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <span className="product-category">{product.category} · Demo</span>
      <h3>{product.name}</h3>
      <div className="product-meta"><strong>{formatPrice(product.price)}</strong><span>{product.size}</span></div>
    </Link>
  );
}
