import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Package, Truck } from "lucide-react";
import { imgUrl } from "../../data/products";

// Redux tools integrated
import { useSelector } from "react-redux";

const statusIcon = {
  Processing: Package,
  Shipped: Truck,
  Delivered: CheckCircle2,
};

export default function Orders() {
  // Reads orders from your slice state structure safely
  const orders = useSelector((state) => {
    if (state.orders && Array.isArray(state.orders.orders)) {
      return state.orders.orders;
    }
    // Fallback wrapper check in case of flat array mapping
    return Array.isArray(state.orders) ? state.orders : [];
  });

  // Dynamic metadata management
  useEffect(() => {
    document.title = "My Orders — BulkBuy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Track and review your past bulk orders.");
    }
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Account</div>
        <h1 className="font-display text-4xl font-semibold">My orders</h1>
        <p className="mt-2 text-sm text-muted-foreground">{orders.length} orders on record</p>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No orders yet.</p>
          <Link to="/products" className="mt-4 inline-block underline">Place your first order</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => {
            const Icon = statusIcon[o.status] || Package;
            return (
              <article key={o.id} className="overflow-hidden rounded-2xl border border-border bg-card">
                <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-6 py-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Order</div>
                    <div className="font-display text-lg font-semibold">{o.id}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Placed</div>
                    <div className="font-semibold">{o.date}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Ship to</div>
                    <div className="font-semibold">{o.shipTo}</div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    o.status === "Delivered" ? "bg-foreground text-background"
                    : o.status === "Shipped" ? "bg-[var(--beige)] text-foreground"
                    : "bg-muted text-foreground"
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                    {o.status}
                  </span>
                </header>
                
                <div className="divide-y divide-border">
                  {o.items && o.items.map((it, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4">
                      <img src={imgUrl(it.image, 1)} alt={it.name} className="h-14 w-14 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="font-semibold">{it.name}</div>
                        <div className="text-xs text-muted-foreground">Qty: {it.qty} · ${it.price ? it.price.toFixed(2) : "0.00"} / set</div>
                      </div>
                      <div className="font-semibold">${(it.price && it.qty) ? (it.price * it.qty).toFixed(2) : "0.00"}</div>
                    </div>
                  ))}
                </div>
                
                <footer className="flex items-center justify-between border-t border-border bg-muted/40 px-6 py-4">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-display text-2xl font-bold">${o.total ? o.total.toFixed(2) : "0.00"}</span>
                </footer>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}