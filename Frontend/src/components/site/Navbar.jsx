import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Package } from "lucide-react";

// Redux hooks integration
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  
  // Pull core cart items array from Redux state
  const items = useSelector((state) => state.cart) || [];
  
  // Calculate total badge count dynamically by summing set quantities
  const count = items.reduce((total, item) => total + item.qty, 0);

  const link = (to, label) => (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors hover:text-foreground ${
        path === to ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
            <Package className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">BulkBuy</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {link("/products", "Products")}
          {link("/products", "Notebooks")}
          {link("/orders", "My Orders")}
        </nav>
        <div className="hidden flex-1 md:flex">
          <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <input
              className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
              placeholder="Search stationery..."
            />
          </label>
        </div>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
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
    </header>
  );
}