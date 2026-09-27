// Demonstration catalog only. Replace with verified product data before launch.
export const products = [
  { slug: 'heritage-saree', name: 'Heritage saree', category: 'Sarees', price: 2400, size: '5.5 m × 1.15 m', tone: 'maroon' },
  { slug: 'olive-stole', name: 'Olive stole', category: 'Stoles', price: 850, size: '180 × 70 cm', tone: 'olive' },
  { slug: 'golden-dupatta', name: 'Golden dupatta', category: 'Dupattas', price: 1200, size: '240 × 90 cm', tone: 'gold' },
  { slug: 'sand-saree', name: 'Sand saree', category: 'Sarees', price: 2800, size: '5.5 m × 1.15 m', tone: 'gold' },
  { slug: 'earth-stole', name: 'Earth stole', category: 'Stoles', price: 950, size: '200 × 70 cm', tone: 'maroon' },
  { slug: 'garden-dupatta', name: 'Garden dupatta', category: 'Dupattas', price: 1500, size: '250 × 90 cm', tone: 'olive' },
];
export const productImage = '/Assets/logos/smrija-logo-800.png';
export const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
