import { products } from "../data/products";

export function imgUrl(id, sig = 1) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70&sig=${sig}`;
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function priceFor(product, quantity) {
  const tier = product.tiers.find((t) => quantity >= t.min && (t.max === null || quantity <= t.max));
  return tier ? tier.price : product.basePrice;
}

export function calculateCartTotals(items, products) {
  let subtotal = 0;
  let discount = 0;
  let itemCount = 0;

  for (const { productId, qty } of items) {
    const product = products.find((p) => p.id === productId);
    if (!product) continue;

    const lineTotal = priceFor(product, qty) * qty;
    
    subtotal += lineTotal;
    discount += Math.max(0, (product.basePrice * qty) - lineTotal);
    itemCount += qty;
  }

  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 25;

  return {
    subtotal,
    discount,
    itemCount,
    shipping,
    total: subtotal + shipping,
  };
}