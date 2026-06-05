import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FileText, Minus, Plus, ShoppingCart } from "lucide-react";

import { getProduct, imgUrl, priceFor } from "../../data/products";
import { addToCart } from "../cart/cartSlice"; 
import Toast from "../../components/site/Toast";

export default function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = getProduct(slug);

  // --- State Hooks ---
  const [toastMessage, setToastMessage] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(product ? product.minOrder * 10 : 0);

 

  // --- Early Return (Not Found) ---
  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block underline">
          Back to catalog
        </Link>
      </div>
    );
  }

  // --- Derived State & Handlers ---
  const unitPrice = priceFor(product, qty);
  const totalPrice = unitPrice * qty;

  const handleQtyChange = (amount) => {
    setQty(Math.max(product.minOrder, Math.floor(amount) || product.minOrder));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({ 
        productId: product.id, 
        qty: qty 
      })
    );
    setToastMessage(`${qty} × ${product.name} added to order`);
  };

  // ==========================================
  // SUB-COMPONENTS (For Cleaner Layout)
  // ==========================================
  
  const Breadcrumbs = () => (
    <nav className="mb-6 text-xs text-muted-foreground">
      <Link to="/" className="hover:underline">Home</Link> /{" "}
      <Link to="/products" className="hover:underline">Products</Link> /{" "}
      <span className="text-foreground">{product.name}</span>
    </nav>
  );

  const ImageGallery = () => (
    <div>
      <div className="overflow-hidden rounded-2xl bg-[var(--beige)] p-6">
        <div className="overflow-hidden rounded-xl bg-[var(--beige-soft)]">
          <img
            src={imgUrl(product.gallery[activeImg], activeImg + 1)}
            alt={product.name}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {product.gallery.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImg(idx)}
            className={`overflow-hidden rounded-xl bg-[var(--beige)] p-2 transition-all ${
              idx === activeImg ? "ring-2 ring-foreground" : ""
            }`}
          >
            <img 
              src={imgUrl(img, idx + 1)} 
              alt="" 
              className="aspect-[4/3] w-full rounded-md object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );

  const TieredPricingTable = () => (
    <div className="mt-8">
      <div className="text-sm font-semibold uppercase tracking-[0.14em]">
        Wholesale tiered pricing
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
        {/* Table Header */}
        <div className="grid grid-cols-3 border-b border-border bg-muted/60 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Quantity</span>
          <span className="text-center">Discount</span>
          <span className="text-right">Price / set</span>
        </div>
        {/* Table Body */}
        {product.tiers.map((tier, idx) => {
          const isActive = qty >= tier.min && (tier.max === null || qty <= tier.max);
          return (
            <div
              key={idx}
              className={`grid grid-cols-3 items-center px-5 py-4 text-sm ${
                isActive ? "bg-[var(--beige)]/40" : ""
              } ${idx > 0 ? "border-t border-border" : ""}`}
            >
              <span className={isActive ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {tier.min} {tier.max ? `– ${tier.max}` : "+"} sets
              </span>
              <span className="text-center">
                <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${
                  isActive ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {tier.discount}% OFF
                </span>
              </span>
              <span className={`text-right font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                ${tier.price.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ==========================================
  // MAIN RENDER
  // ==========================================
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <Breadcrumbs />

      <div className="grid gap-10 lg:grid-cols-2">
        <ImageGallery />

        {/* Product Info & Ordering */}
        <div>
          <span className="inline-block rounded-full border border-foreground/15 bg-[var(--beige)] px-3 py-1 text-xs font-medium">
            Available to Bulk Order
          </span>
          
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
            {product.name.toUpperCase()}
          </h1>
          
          <p className="mt-3 text-base text-muted-foreground">
            {product.description}
          </p>

          {/* Product Attributes */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.attributes.map((attr) => (
              <span key={attr} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm">
                {attr}
              </span>
            ))}
          </div>

          <TieredPricingTable />

          {/* Quantity Selector & Pricing Summary */}
          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Order Quantity</div>
              <div className="flex items-center gap-1 rounded-full border border-border bg-background px-1">
                <button 
                  onClick={() => handleQtyChange(qty - product.minOrder)} 
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  value={qty}
                  onChange={(e) => handleQtyChange(Number(e.target.value))}
                  className="w-16 bg-transparent text-center font-semibold outline-none"
                />
                <button 
                  onClick={() => handleQtyChange(qty + product.minOrder)} 
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">Estimated total</span>
              <span className="font-display text-3xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-4 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" /> Add to Bulk Order
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 px-5 py-4 text-sm font-semibold hover:bg-muted transition-colors">
              <FileText className="h-4 w-4" /> Request Sample
            </button>
          </div>
        </div>
      </div>

      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage("")} 
      />
    </div>
  );
}