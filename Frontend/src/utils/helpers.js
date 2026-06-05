import { products } from "../data/products";


export function imgUrl(id, sig = 1) {
  return  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70&sig=${sig}`;;
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function priceFor(product, quantity) {
  for (let i = 0; i < product.tiers.length; i++) {
    let currentTier = product.tiers[i];
    let meetsMinimum = quantity >= currentTier.min;
    let meetsMaximum = currentTier.max === null || quantity <= currentTier.max;

    if (meetsMinimum && meetsMaximum) {
      return currentTier.price;
    }
  }
  return product.basePrice;
}

export function calculateCartTotals(items, products) {
  let subtotal = 0;
  let discount = 0;
  let itemCount = 0;

  items.forEach((item) => {
    const productData = products.find((p) => p.id === item.productId);
    if (!productData) return;

    const tieredPrice = priceFor(productData, item.qty);
    const lineTotal = tieredPrice * item.qty;
    const regularCost = productData.basePrice * item.qty;

    subtotal += lineTotal;
    discount += Math.max(0, regularCost - lineTotal);
    itemCount += item.qty;
  });

  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 25;
  const total = subtotal + shipping;

  return {
    subtotal,
    discount,
    itemCount,
    shipping,
    total,
  };
}


