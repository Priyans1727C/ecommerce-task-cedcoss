import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, ShoppingCart, User, Package, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/products", label: "Products" },
  { to: "/products", label: "Notebooks" },
  { to: "/orders", label: "My Orders" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const items = useSelector((state) => state.cart) || [];
  const count = items.reduce((total, item) => total + item.qty, 0);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border hover:bg-muted transition-colors md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Package className="h-5 w-5 text-foreground" />
            )}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <span className="hidden md:grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
              <Package className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">BulkBuy</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ to, label }, idx) => (
            <Link
              key={idx}
              to={to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 md:flex md:justify-center lg:justify-start lg:ml-6">
          <Link
            to="/products"
            className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
          >
            <Search className="h-4 w-4" />
            <span>Search stationery...</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background animate-in fade-in zoom-in-75 duration-150">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
          <Link
            to="/orders"
            className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted transition-colors"
            aria-label="Account"
          >
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-border/60 bg-background px-4 py-4 shadow-lg md:hidden animate-in slide-in-from-top-2">
          <nav className="mb-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label }, idx) => (
              <Link
                key={idx}
                to={to}
                onClick={closeMenu}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  pathname === to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            to="/products"
            onClick={closeMenu}
            className="flex w-full items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
          >
            <Search className="h-4 w-4" />
            <span>Search stationery...</span>
          </Link>
        </div>
      )}
    </header>
  );
}