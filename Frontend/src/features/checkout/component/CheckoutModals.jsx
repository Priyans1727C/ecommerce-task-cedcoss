import { Check, Download, Package, X } from "lucide-react";

// ==========================================
// 1. ORDER SUCCESS MODAL
// ==========================================
export function OrderSuccessModal({ order, onClose, onViewReceipt }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl border border-neutral-200/50 bg-[#f7f4f0] p-8 text-center shadow-2xl">
        {/* Top Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Verification Circle Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eae3d8]">
          <Check className="h-6 w-6 text-neutral-800 stroke-[3]" />
        </div>

        <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-neutral-900">
          Order placed!
        </h2>
        <p className="mt-3 px-2 text-sm leading-relaxed text-neutral-600">
          Thanks <span className="font-medium text-neutral-900">{order.customerName}</span> — confirmation sent to <br />
          <span className="font-semibold text-neutral-900">{order.customerEmail}</span>.
        </p>

        {/* Inner Dashboard Summary */}
        <div className="mt-6 space-y-3 rounded-2xl border border-neutral-200 bg-transparent p-5 text-left text-sm text-neutral-700">
          <div className="flex justify-between">
            <span className="text-neutral-500">Order ID</span>
            <span className="font-mono font-semibold text-neutral-900">{order.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Total</span>
            <span className="font-semibold text-neutral-900">₹{order.total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-500">Status</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
              <Package className="h-4 w-4 text-neutral-600" /> {order.status}
            </span>
          </div>
        </div>

        {/* Action Group */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button 
            onClick={onViewReceipt}
            className="rounded-xl border border-neutral-300 bg-transparent py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200/50"
          >
            View receipt
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900">
            <Download className="h-4 w-4" /> Download
          </button>
        </div>

        <button 
          onClick={onClose} 
          className="mt-5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-800"
        >
          Go to my orders →
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 2. DETAILED RECEIPT MODAL
// ==========================================
export function ReceiptModal({ order, onClose, onBack }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl border border-neutral-200/50 bg-[#f7f4f0] p-8 shadow-2xl">
        {/* Top Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900">Receipt</h2>
        <div className="mt-1 font-mono text-xs text-neutral-500">
          {order.orderId} · {order.date}
        </div>

        {/* Main Outer Box Border */}
        <div className="mt-5 max-h-[40vh] space-y-4 overflow-y-auto rounded-2xl border border-neutral-200 bg-transparent p-5">
          {/* Shipping Sub-Panel */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Ship To</div>
            <div className="mt-1 text-sm font-semibold leading-snug text-neutral-800">{order.shipTo}</div>
          </div>
          
          <hr className="border-neutral-200" />

          {/* Dynamic Line Items mapping */}
          <div className="space-y-3">
            {order.items.map((it, idx) => (
              <div key={idx} className="flex items-start justify-between text-sm">
                <span className="max-w-[75%] text-neutral-600">
                  {it.name} <span className="font-mono text-xs text-neutral-400">× {it.qty}</span>
                </span>
                <span className="font-semibold text-neutral-900">
                  ₹{(it.price * it.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <hr className="border-neutral-200" />

          {/* Final Rupee Summary Total block */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="text-sm font-medium text-neutral-800">Total</span>
            <span className="font-serif text-2xl font-bold text-neutral-900">
              ₹{order.total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Base Action Panel */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button 
            onClick={onBack}
            className="rounded-xl border border-neutral-300 bg-transparent py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200/50"
          >
            Back
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900">
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}