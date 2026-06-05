import { Link } from "react-router-dom";


export default  function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <div className="font-display text-xl font-semibold">BulkBuy</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Wholesale stationery for studios, offices and creators.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-semibold">Shop</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>Notebooks</li><li>Pens</li><li>Desk</li><li>Paper</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-semibold">Company</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>About</li><li>Wholesale program</li><li>Contact</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-semibold">Support</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>Shipping</li><li>Returns</li><li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 BulkBuy — All rights reserved.
      </div>
    </footer>
  );
}