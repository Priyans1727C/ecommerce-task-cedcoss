import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { products, imgUrl, priceFor } from "../../data/products";
import { calculateCartTotals } from "../../utils/helpers";
import { updateCartItem, removeFromCart } from "./cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart) || [];
  const { subtotal, discount, shipping, total } = calculateCartTotals(items, products);



  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--beige)]">
          <ShoppingBag className="h-7 w-7" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add bulk items from the catalog to see them here.</p>
        <Link to="/products" className="mt-8 inline-flex rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background">
          Browse products
        </Link>
      </div>
    );
  }

  const handleUpdateQty = (productId, newQty, minOrder) => {
    const parsedQty = parseInt(newQty, 10);
    const validQty = isNaN(parsedQty) ? minOrder : Math.max(minOrder, parsedQty);
    dispatch(updateCartItem({ id: productId, qty: validQty }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <h1 className="font-display text-4xl font-semibold">Your bulk cart</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {items.length} {items.length === 1 ? "item" : "items"} ready for review
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {items.map((item) => {
            const productData = products.find((x) => x.id === item.productId);
            if (!productData) return null;

            return (
              <CartItemRow 
                key={item.productId} 
                item={item} 
                product={productData} 
                onUpdateQty={handleUpdateQty}
                onRemove={() => dispatch(removeFromCart(item.productId))}
              />
            );
          })}
        </div>

        <CartSummaryPanel 
          subtotal={subtotal} 
          discount={discount} 
          shipping={shipping} 
          total={total} 
        />
      </div>
    </div>
  );
}

function CartItemRow({ item, product, onUpdateQty, onRemove }) {
  const unitPrice = priceFor(product, item.qty);
  const lineTotal = unitPrice * item.qty;
  const [localQty, setLocalQty] = useState(item.qty);

  useEffect(() => {
    setLocalQty(item.qty);
  }, [item.qty]);

  const handleIncrement = () => onUpdateQty(item.productId, item.qty + product.minOrder, product.minOrder);
  const handleDecrement = () => onUpdateQty(item.productId, item.qty - product.minOrder, product.minOrder);
  const handleChange = (e) => setLocalQty(e.target.value);
  const handleBlur = () => onUpdateQty(item.productId, localQty, product.minOrder);

  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="overflow-hidden rounded-xl bg-[var(--beige)] p-2">
        <img src={imgUrl(product.image, 1)} alt={product.name} className="h-24 w-24 rounded-md object-cover" />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</div>
            <Link to={`/products/${product.slug}`} className="font-display text-lg font-semibold hover:underline">
              {product.name}
            </Link>
          </div>
          <button onClick={onRemove} className="text-muted-foreground hover:text-destructive transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        
        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex items-center gap-1 rounded-full border border-border px-1">
            <button 
              onClick={handleDecrement} 
              className="grid h-8 w-8 place-items-center rounded-full hover:bg-muted transition-colors"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            
            <input 
              type="number"
              value={localQty}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-12 bg-transparent text-center text-sm font-semibold outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />

            <button 
              onClick={handleIncrement} 
              className="grid h-8 w-8 place-items-center rounded-full hover:bg-muted transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-muted-foreground">₹{unitPrice.toFixed(2)} / set</div>
            <div className="font-display text-xl font-semibold">₹{lineTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartSummaryPanel({ subtotal, discount, shipping, total }) {
  return (
    <aside className="h-fit rounded-2xl border border-border bg-card p-6">
      <div className="font-display text-2xl font-semibold">Summary</div>
      
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Subtotal</dt>
          <dd className="font-semibold">₹{subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Bulk discount</dt>
          <dd className="font-semibold text-foreground">-₹{discount.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Shipping</dt>
          <dd className="font-semibold">{shipping === 0 ? "FREE" : `₹${shipping}`}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-end justify-between border-t border-border pt-5">
        <span className="text-sm">Total</span>
        <span className="font-display text-3xl font-bold">₹{total.toFixed(2)}</span>
      </div>

      <Link to="/checkout" className="mt-6 flex items-center justify-center rounded-xl bg-foreground px-5 py-4 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors">
        Proceed to checkout →
      </Link>
      <Link to="/products" className="mt-3 block text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Continue shopping
      </Link>
    </aside>
  );
}