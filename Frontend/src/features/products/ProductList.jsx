import { useMemo, useState, useEffect } from "react";
import { products } from "../../data/products";
import { ProductCard } from "./components/ProductCard";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("featured");


  const list = useMemo(() => {
    let r = cat === "All" ? products : products.filter((p) => p.category === cat);
    if (sort === "low") r = [...r].sort((a, b) => a.basePrice - b.basePrice);
    if (sort === "high") r = [...r].sort((a, b) => b.basePrice - a.basePrice);
    if (sort === "discount") r = [...r].sort((a, b) => b.discountPct - a.discountPct);
    return r;
  }, [cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Catalog</div>
        <h1 className="font-display text-4xl font-semibold tracking-tight">All products</h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Every item ships with wholesale tier pricing — the more you order, the less you pay.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="ml-auto rounded-lg border border-border bg-card px-3 py-2 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="discount">Biggest discount</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => <ProductCard key={p.id} product={p} idx={i + 1} />)}
      </div>
    </div>
  );
}