import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";
import { ProductCard } from "./components/ProductCard";
import Toast from "../../components/site/Toast";

const CATEGORIES = ["All", ...new Set(products.map((p) => p.category))];
const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("featured");
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [cat, sort]);

  const list = useMemo(() => {
    let r = cat === "All" ? products : products.filter((p) => p.category === cat);
    if (sort === "low") return [...r].sort((a, b) => a.basePrice - b.basePrice);
    if (sort === "high") return [...r].sort((a, b) => b.basePrice - a.basePrice);
    if (sort === "discount") return [...r].sort((a, b) => b.discountPct - a.discountPct);
    return r;
  }, [cat, sort]);

  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);
  const paginatedList = list.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Catalog</div>
        <h1 className="font-display text-4xl font-semibold tracking-tight">All products</h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Every item ships with wholesale tier pricing — the more you order, the less you pay.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="ml-auto rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="discount">Biggest discount</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedList.map((p, i) => (
          <ProductCard
            key={p.id}
            product={p}
            idx={i + 1}
            onAddToCartSuccess={setToastMessage}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "border border-border bg-transparent text-muted-foreground hover:bg-muted"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}