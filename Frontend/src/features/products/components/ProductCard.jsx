import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, ShoppingCart } from "lucide-react";
import { imgUrl } from "../../../data/products";
import Toast from "../../../components/site/Toast";


import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";

export function ProductCard({ product, idx = 1 }) {
  const dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = () => {
   
    dispatch(
      addToCart({
        id: product.id,
        qty: product.minOrder,
      })
    );

    // Trigger Custom Toast Notification
    setToastMessage(`${product.minOrder} × ${product.name} added to cart`);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative bg-[var(--beige)] p-5">
        <span className="absolute left-3 top-3 z-10 rounded-md bg-foreground px-2 py-1 text-xs font-semibold text-background">
          -{product.discountPct}%
        </span>
        <Link to={`/products/${product.slug}`} className="block">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[var(--beige-soft)]">
            <img
              src={imgUrl(product.image, idx)}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {product.category}
        </div>
        <Link
          to={`/products/${product.slug}`}
          className="font-display text-lg font-semibold leading-tight tracking-tight hover:underline"
        >
          {product.name.toUpperCase()}
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">${product.basePrice}</span>
          <span className="text-sm text-muted-foreground line-through">${product.compareAt}</span>
          <span className="ml-auto text-xs text-muted-foreground">Min {product.minOrder}</span>
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link
            to={`/products/${product.slug}`}
            aria-label="Details"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border hover:bg-muted"
          >
            <Info className="h-4 w-4" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            <ShoppingCart className="h-4 w-4" /> Add to cart
          </button>
        </div>
      </div>

      {/* Render custom toast if message exists */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage("")} 
      />
    </div>
  );
}