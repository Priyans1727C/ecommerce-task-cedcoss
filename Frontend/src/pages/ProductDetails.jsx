import React, { useMemo, useState } from "react";
import { Minus, Plus, ShoppingCart, FileText, Truck, ShieldCheck, ChevronRight } from "lucide-react";

// Mock data directly derived from the image attributes
const MOCK_PRODUCT = {
  id: "ultra-smooth-gel-pens",
  name: "Ultra-Smooth Gel Pens (Black)",
  description: "Fast-drying gel ink pens with a comfortable grip. Ideal for everyday writing at home, office or studio.",
  inStock: true,
  unit: "pen",
  image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80",
  specs: [
    { label: "Tip", value: "0.5mm" },
    { label: "Ink", value: "Gel" },
    { label: "Pack", value: "Tub of 100" }
  ],
  tiers: [
    { range: "100 – 500 pens", price: 0.35, minQty: 100 },
    { range: "501 – 2000 pens", price: 0.28, minQty: 501 },
    { range: "2001+ pens", price: 0.21, minQty: 2001 }
  ]
};

export default function ProductDetailPage() {
  const p = MOCK_PRODUCT;
  const [qty, setQty] = useState(500);

  // Dynamic tier selection logic based on the user's selected input value
  const currentTier = useMemo(() => {
    if (qty >= 2001) return p.tiers[2];
    if (qty >= 501) return p.tiers[1];
    return p.tiers[0];
  }, [qty, p.tiers]);

  const total = currentTier.price * qty;
  const baseTotal = p.tiers[0].price * qty;
  const savings = baseTotal - total;
  const savingsPct = baseTotal > 0 ? Math.round((savings / baseTotal) * 100) : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-slate-50 min-h-screen text-slate-800">
      
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <ChevronRight className="h-3 w-3 text-slate-400" />
        <a href="#catalog" className="hover:text-blue-600 transition">Catalog</a>
        <ChevronRight className="h-3 w-3 text-slate-400" />
        <span className="text-slate-700 font-semibold">{p.name}</span>
      </nav>

      {/* Primary Product Columns */}
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        
        {/* Media Block (Main Product Image and Gallery Previews) */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-blue-500 transition shadow-sm">
                <img src={p.image} alt={`Preview ${i + 1}`} className="h-full w-full object-cover opacity-85" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Configuration Form Block */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
            {p.inStock ? "In Stock" : "Pre-order"}
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{p.name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.description}</p>

          {/* Product Specifications Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {p.specs.map((s) => (
              <span key={s.label} className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-semibold">{s.value}</strong> {s.label}
              </span>
            ))}
          </div>

          {/* Wholesale Pricing Tier Table Structure */}
          <h3 className="mt-8 text-sm font-bold text-slate-900 uppercase tracking-wider">Wholesale tiered pricing</h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">Quantity</th>
                  <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider">Price / {p.unit}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {p.tiers.map((t) => {
                  const isActive = t.price === currentTier.price;
                  return (
                    <tr key={t.range} className={`transition-colors ${isActive ? "bg-amber-50/70 font-medium" : ""}`}>
                      <td className="px-4 py-3 text-slate-700">{t.range}</td>
                      <td className={`px-4 py-3 text-right font-bold ${isActive ? "text-blue-600" : "text-blue-500"}`}>
                        ${t.price.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Order Calculator Interface Panel */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-slate-700">Order Quantity</span>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 shadow-inner">
                <button 
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-white text-slate-500 hover:text-slate-800 transition active:scale-95" 
                  onClick={() => setQty(Math.max(100, qty - 100))}
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <input
                  type="number"
                  value={qty}
                  step={100}
                  onChange={(e) => setQty(Math.max(100, Number(e.target.value) || 100))}
                  className="w-16 bg-transparent text-center text-sm font-bold text-slate-800 outline-none"
                />
                <button 
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-white text-slate-500 hover:text-slate-800 transition active:scale-95" 
                  onClick={() => setQty(qty + 100)}
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-100">
              <span className="text-slate-500 font-medium">Estimated total</span>
              <span className="text-xl font-black text-slate-900">${total.toFixed(2)}</span>
            </div>

            {savings > 0 && (
              <div className="flex items-center justify-between rounded-lg bg-amber-100/70 px-3 py-2.5 text-xs text-amber-900 border border-amber-200/50">
                <span className="font-bold uppercase tracking-wider">Bulk Savings</span>
                <span className="font-black">Save ${savings.toFixed(2)} ({savingsPct}%)</span>
              </div>
            )}
          </div>

          {/* Checkout Action Trigger Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 active:bg-blue-800 transition active:scale-[0.99]">
              <ShoppingCart className="h-4 w-4" /> Add to Bulk Order
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-400 px-5 py-3.5 text-sm font-bold text-amber-950 shadow-sm hover:bg-amber-400/90 active:bg-amber-500 transition active:scale-[0.99]">
              <FileText className="h-4 w-4" /> Request Sample
            </button>
          </div>

          {/* Guarantee Value Grid Badges */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Truck className="h-5 w-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800">Free shipping</p>
                <p className="text-slate-400 mt-0.5">Orders over $250</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800">Quality assured</p>
                <p className="text-slate-400 mt-0.5">30-day returns</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}