import { Link } from "react-router-dom";
import { Package, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Package className="h-4 w-4" />
            </span>
            <span className="text-xl font-bold tracking-tight text-primary">BulkBuy</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Wholesale stationery for offices, studios, creators, and teams of every size.
          </p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <Globe className="h-4 w-4" />
            <Mail className="h-4 w-4" />
          </div>
        </div>

        <FooterCol title="Shop" links={[
          { label: "Notebooks", to: "/catalog" },
          { label: "Writing", to: "/catalog" },
          { label: "Art Supplies", to: "/catalog" },
          { label: "Office", to: "/catalog" },
        ]} />
        <FooterCol title="Company" links={[
          { label: "About", to: "/" },
          { label: "Bulk Pricing", to: "/catalog" },
          { label: "Sustainability", to: "/" },
          { label: "Careers", to: "/" },
        ]} />
        <FooterCol title="Support" links={[
          { label: "Help Center", to: "/" },
          { label: "Shipping", to: "/" },
          { label: "Returns", to: "/" },
          { label: "Contact", to: "/" },
        ]} />
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} BulkBuy. Wholesale stationery, delivered.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}