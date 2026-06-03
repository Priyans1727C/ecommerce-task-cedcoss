import { useState } from "react";
import {
  Truck,
  CreditCard,
  FileText,
  BadgeCheck,
  Lock,
  ShieldCheck,
} from "lucide-react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("po");

  const cart = [
    {
      id: 1,
      name: "Premium A4 Spiral Notebooks",
      qty: 500,
      price: 600,
      image:
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=200",
    },
    {
      id: 2,
      name: "Ultra-Smooth Gel Pens (Black)",
      qty: 2400,
      price: 672,
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200",
    },
    {
      id: 3,
      name: "Neon Sticky Notes Mega Pack",
      qty: 800,
      price: 336,
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=200",
    },
  ];

  const subtotal = 1608;
  const savings = 422;
  const total = 1608;

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#2563eb]">
            Secure Bulk Checkout
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Finalize your wholesale order with verified pricing.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Shipping Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-[#2563eb]" />
                <h2 className="text-xl font-semibold">Shipping</h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InputField label="Full Name" placeholder="Jane Doe" />
                <InputField label="Company / Studio" placeholder="Acme Co." />
                <InputField label="Email" placeholder="orders@acme.com" />
                <InputField label="Phone" placeholder="+1 555 0100" />

                <div className="md:col-span-2">
                  <InputField
                    label="Delivery Address"
                    placeholder="124 Market St, San Francisco, CA"
                  />
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#2563eb]" />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <PaymentCard
                  active={paymentMethod === "card"}
                  icon={<CreditCard size={20} />}
                  label="Credit Card"
                  onClick={() => setPaymentMethod("card")}
                />
                <PaymentCard
                  active={paymentMethod === "invoice"}
                  icon={<FileText size={20} />}
                  label="Invoice"
                  onClick={() => setPaymentMethod("invoice")}
                />
                <PaymentCard
                  active={paymentMethod === "po"}
                  icon={<BadgeCheck size={20} />}
                  label="Purchase Order"
                  onClick={() => setPaymentMethod("po")}
                />
              </div>

              {paymentMethod === "po" && (
                <div className="mt-6">
                  <InputField
                    label="P.O. Number"
                    placeholder="e.g. PO-2026-00192"
                  />
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <InputField
                      label="Card Number"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <InputField label="Expiry" placeholder="MM / YY" />
                  <InputField label="CVC" placeholder="123" />
                </div>
              )}
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <p className="mt-1 text-xs text-gray-500">3,700 ITEMS</p>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Qty: {item.qty.toLocaleString()}
                    </p>
                  </div>

                  <span className="text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-slate-200 pt-4 text-sm">
              <Row label="Subtotal" value="$1608.00" />
              <Row label="Bulk Discount" value="-$422.00" />
              <Row label="Shipping" value="FREE" />
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total</p>
                  <h3 className="text-3xl font-bold text-[#2563eb]">
                    ${total.toFixed(2)}
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-[10px] uppercase text-gray-500">You Save</p>
                  <p className="text-sm font-semibold">${savings.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <button className="mt-6 flex h-11 w-full items-center justify-center rounded-xl bg-[#2563eb] font-semibold text-white transition hover:bg-[#1d4ed8]">
              Finalize Order →
            </button>

            <div className="mt-5 flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <Lock size={14} />
                SSL Secured
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} />
                Buyer Protected
              </div>
            </div>

            <button className="mt-5 block w-full text-center text-sm text-[#2563eb] hover:underline">
              ← Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        {...props}
        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function PaymentCard({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-24 flex-col items-center justify-center gap-2 rounded-xl border-2 transition-all ${
        active
          ? "border-[#2563eb] bg-blue-50"
          : "border-slate-200 bg-white hover:border-blue-300"
      }`}
    >
      <div className="text-[#2563eb]">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
} 