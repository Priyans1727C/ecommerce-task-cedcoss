import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Package } from "lucide-react";


const NAV_LINK_CLASS =
  "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

const CATEGORY_LINKS = [
  { to: "/catalog", label: "Catalog" },
  { to: "/catalog", category: "Notebooks", label: "Notebooks" },
  { to: "/catalog", category: "Writing", label: "Writing" },
  { to: "/catalog", category: "Art Supplies", label: "Art" },
  { to: "/catalog", category: "Office", label: "Office" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Package className="h-4 w-4" />
          </span>
          <span className="text-xl font-bold tracking-tight text-primary">
            BulkBuy
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden items-center gap-7 md:flex">
          {CATEGORY_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              search={
                link.category ? { category: link.category } : undefined
              }
              className={NAV_LINK_CLASS}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1.5 w-64">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              type="search"
              placeholder="Search stationery..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Search products"
            />
          </div>

          {/* Cart Button */}
          <Link to="/checkout">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </Link>

          {/* Account Button */}
          <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="User account">
            <User className="h-5 w-5" />
          </button>

          {/* Get Quote Button */}
          <button className="hidden sm:inline-flex px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}