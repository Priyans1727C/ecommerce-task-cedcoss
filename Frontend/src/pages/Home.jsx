import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Package, ShieldCheck, Truck } from "lucide-react";
import { products, imgUrl } from "../data/products";
import { ProductCard } from "../features/products/components/ProductCard";
import Toast from "../components/site/Toast";

const STATS = [
  ["120+", "SKUs"],
  ["3 tiers", "Volume pricing"],
  ["48h", "Dispatch"]
];

const PROPS = [
  { i: Layers, t: "Volume tiers", d: "Save up to 40% on larger orders." },
  { i: Truck, t: "Free shipping", d: "On orders over ₹500." },
  { i: ShieldCheck, t: "Buyer protected", d: "Returns within 30 days, no questions." },
  { i: Package, t: "Sample first", d: "Request samples before committing." }
];

export default function Home() {
  const [toastMessage, setToastMessage] = useState("");
  const featured = products.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--beige)] to-background" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" /> Tiered wholesale pricing
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Stationery that<br/> earns its <em className="not-italic underline decoration-foreground/30 underline-offset-8">desk space</em>.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Sourced and crafted for serious teams. The more you order, the less you pay — transparent pricing, no haggling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/90">
                Shop wholesale <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-3 text-sm font-semibold hover:bg-foreground/5">
                Browse catalog
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {STATS.map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-semibold">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {featured.map((p, i) => (
                <div key={p.id} className={`overflow-hidden rounded-2xl bg-[var(--beige-soft)] ${i % 2 ? "translate-y-6" : ""}`}>
                  <img src={imgUrl(p.image, i + 10)} alt={p.name} className="aspect-square w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {PROPS.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-5">
              <Icon className="h-5 w-5 text-foreground" />
              <div className="mt-3 font-semibold">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Best sellers</div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Studios are stocking up on these</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold underline-offset-4 hover:underline md:inline">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              idx={i + 1} 
              onAddToCartSuccess={setToastMessage} 
            />
          ))}
        </div>
      </section>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}