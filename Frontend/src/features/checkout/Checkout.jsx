import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CreditCard, FileText, ShieldCheck, Truck, Receipt } from "lucide-react";
import { products, imgUrl, priceFor } from "../../data/products";
import { calculateCartTotals } from "../../utils/helpers";
import { clearCart } from "../cart/cartSlice";
import { placeOrder } from "../orders/orderSlice";
import Toast from "../../components/site/Toast";
import { OrderSuccessModal, ReceiptModal } from "./component/CheckoutModals";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toastMessage, setToastMessage] = useState("");
  const [method, setMethod] = useState("po");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", address: "", po: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const items = useSelector((state) => state.cart) || [];
  const { subtotal, discount, itemCount, shipping, total } = calculateCartTotals(items, products);

  if (items.length === 0 && !showSuccess && !showReceipt) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Nothing to check out yet</h1>
        <Link to="/products" className="mt-4 inline-block underline">
          Browse products
        </Link>
      </div>
    );
  }

  const handleFormChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    const orderId = method === "po" && form.po ? form.po : `PO-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const todayStr = new Date().toISOString().split("T")[0];

    const orderItems = items.map((it) => {
      const p = products.find((x) => x.id === it.productId);
      return {
        name: p?.name || "Unknown Product",
        qty: it.qty,
        price: p ? priceFor(p, it.qty) : 0,
        image: p?.image || ""
      };
    });

    const finalOrderPayload = {
      orderId,
      date: todayStr,
      items: orderItems,
      total,
      customerName: form.name,
      customerEmail: form.email,
      shipTo: `${form.company || form.name}, ${form.address}`,
      status: "Processing"
    };

    dispatch(placeOrder(finalOrderPayload));
    setCompletedOrder(finalOrderPayload);
    dispatch(clearCart());
    
    setToastMessage("Success! Your order has been placed.");
    setShowSuccess(true);
  };

  const closeModalsAndRedirect = () => {
    setShowSuccess(false);
    setShowReceipt(false);
    navigate("/orders");
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8">
      <h1 className="mb-8 font-display text-4xl font-semibold">Checkout</h1>
      
      <form onSubmit={handleSubmitOrder} className="grid gap-6 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2">
              <Truck className="h-5 w-5 text-foreground" />
              <h2 className="font-display text-xl font-semibold">Shipping</h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name" value={form.name} onChange={(v) => handleFormChange("name", v)} placeholder="Jane Doe" required />
              <Field label="Company / Studio" value={form.company} onChange={(v) => handleFormChange("company", v)} placeholder="Acme Co." />
              <Field label="Email" type="email" value={form.email} onChange={(v) => handleFormChange("email", v)} placeholder="orders@acme.com" required />
              <Field label="Phone" value={form.phone} onChange={(v) => handleFormChange("phone", v)} placeholder="+91 98765 43210" />
              <div className="md:col-span-2">
                <Field label="Delivery Address" value={form.address} onChange={(v) => handleFormChange("address", v)} placeholder="124 Market St, Connaught Place, New Delhi" required />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-foreground" />
              <h2 className="font-display text-xl font-semibold">Payment Method</h2>
            </div>
            
            <div className="grid gap-3 md:grid-cols-3">
              <PayOpt active={method === "card"} onClick={() => setMethod("card")} icon={CreditCard} label="Credit Card" />
              <PayOpt active={method === "invoice"} onClick={() => setMethod("invoice")} icon={FileText} label="Invoice" />
              <PayOpt active={method === "po"} onClick={() => setMethod("po")} icon={Receipt} label="Purchase Order" />
            </div>

            {method === "po" && (
              <div className="mt-5">
                <Field label="P.O. Number" value={form.po} onChange={(v) => handleFormChange("po", v)} placeholder="e.g. PO-2026-00192" />
              </div>
            )}
            
            {method === "card" && (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field label="Card Number" placeholder="4242 4242 4242 4242" />
                <Field label="Name on card" placeholder="Jane Doe" />
                <Field label="Expiry" placeholder="MM / YY" />
                <Field label="CVC" placeholder="123" />
              </div>
            )}
          </section>
        </div>

        <OrderSummaryPanel 
          items={items} 
          itemCount={itemCount} 
          subtotal={subtotal} 
          discount={discount} 
          shipping={shipping} 
          total={total} 
        />
      </form>
      
      {showSuccess && (
        <OrderSuccessModal 
          order={completedOrder} 
          onClose={closeModalsAndRedirect} 
          onViewReceipt={() => { setShowSuccess(false); setShowReceipt(true); }}
        />
      )}

      {showReceipt && (
        <ReceiptModal 
          order={completedOrder} 
          onClose={closeModalsAndRedirect} 
          onBack={() => { setShowReceipt(false); setShowSuccess(true); }}
        />
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}

function OrderSummaryPanel({ items, itemCount, subtotal, discount, shipping, total }) {
  return (
    <aside className="h-fit rounded-2xl border border-border bg-card p-6">
      <div className="font-display text-2xl font-semibold">Order Summary</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{itemCount} items</div>

      <div className="mt-5 space-y-4 border-y border-border py-5">
        {items.map((it) => {
          const p = products.find((x) => x.id === it.productId);
          if (!p) return null;
          const lineTotal = priceFor(p, it.qty) * it.qty;
          return (
            <div key={it.productId} className="flex items-center gap-3">
              <img src={imgUrl(p.image, 1)} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">Qty: {it.qty}</div>
              </div>
              <div className="text-sm font-semibold">₹{lineTotal.toFixed(2)}</div>
            </div>
          );
        })}
      </div>

      <dl className="mt-5 space-y-2 text-sm">
        <Row k="Subtotal" v={`₹${subtotal.toFixed(2)}`} />
        <Row k="Bulk Discount" v={`-₹${discount.toFixed(2)}`} />
        <Row k="Shipping" v={shipping === 0 ? "FREE" : `₹${shipping}`} />
      </dl>

      <div className="mt-5 border-t border-border pt-5">
        <div className="flex items-end justify-between">
          <span className="text-sm">Total</span>
          <div className="text-right">
            <div className="font-display text-3xl font-bold">₹{total.toFixed(2)}</div>
            {discount > 0 && (
              <div className="text-xs text-muted-foreground">
                YOU SAVE <span className="font-semibold text-foreground">₹{discount.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <button type="submit" className="mt-6 w-full rounded-xl bg-foreground px-5 py-4 text-sm font-semibold text-background transition-colors hover:bg-foreground/90">
        Finalize Order →
      </button>
      
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> SSL Secured</span>
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Buyer Protected</span>
      </div>
      
      <Link to="/cart" className="mt-4 block text-center text-sm text-muted-foreground transition-colors hover:text-foreground">
        ← Continue shopping
      </Link>
    </aside>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}

function PayOpt({ active, onClick, icon: Icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all ${
        active ? "border-foreground bg-[var(--beige)]/40" : "border-border hover:bg-muted"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-semibold">{v}</dd>
    </div>
  );
}