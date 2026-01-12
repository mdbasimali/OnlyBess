import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

const GST_RATE = 0.18;

const CheckoutPage = ({ sections, ticketQuantities }) => {
  const navigate = useNavigate();

  /* ---------------- FORM STATE ---------------- */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  /* ---------------- COUPON ---------------- */
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState(false);

  /* ---------------- TIMER ---------------- */
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((p) => (p > 0 ? p - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  /* ---------------- DATA ---------------- */
  const selectedTickets = useMemo(
    () => sections.filter((s) => ticketQuantities[s.id] > 0),
    [sections, ticketQuantities]
  );

  const subTotal = useMemo(() => {
    return selectedTickets.reduce(
      (sum, t) => sum + t.price * ticketQuantities[t.id],
      0
    );
  }, [selectedTickets, ticketQuantities]);

  const gstAmount = Math.round(subTotal * GST_RATE);
  const grandTotal = subTotal + gstAmount - discount;

  const isFormValid = name && email && phone;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "ONLYBEES50") {
      setDiscount(50);
      setCouponError(false);
    } else {
      setDiscount(0);
      setCouponError(true);
    }
  };

  const handleCheckout = () => {
    if (!isFormValid) return;

    console.log("FINAL CHECKOUT DATA");
    console.log({
      name,
      email,
      phone: `${countryCode}${phone}`,
      tickets: selectedTickets,
      subTotal,
      gstAmount,
      discount,
      total: grandTotal,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* CLOSE */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
      >
        ✕
      </button>

      {/* MAIN WRAPPER */}
      <div className="max-w-[1320px] mx-auto px-10 py-12 pb-32">
        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[620px_480px] gap-20 items-start">
          
          {/* LEFT – FORM */}
          <div className="pt-4">
            <h1 className="text-green-500 text-3xl font-bold">CHECKOUT</h1>
            <p className="text-green-400 mt-1">
              Time left: <span className="font-bold">{minutes}:{seconds}</span>
            </p>

            <div className="mt-10 space-y-8 max-w-xl">
              <div>
                <label className="block text-sm mb-2">Name :</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email :</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-gray-600 py-3 outline-none"
                />
                <p className="text-xs text-green-400 mt-1">
                  Note: You'll receive a copy of the tickets here
                </p>
              </div>

              <div>
                <label className="block text-sm mb-2">Phone :</label>
                <div className="flex items-center gap-3 border-b border-gray-600 py-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-black text-white outline-none cursor-pointer text-sm"
                  >
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+1">🇺🇸 USA (+1)</option>
                    <option value="+44">🇬🇧 UK (+44)</option>
                    <option value="+61">🇦🇺 Australia (+61)</option>
                    <option value="+971">🇦🇪 UAE (+971)</option>
                    <option value="+49">🇩🇪 Germany (+49)</option>
                    <option value="+33">🇫🇷 France (+33)</option>
                    <option value="+81">🇯🇵 Japan (+81)</option>
                    <option value="+86">🇨🇳 China (+86)</option>
                  </select>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-transparent outline-none"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-400">
                By purchasing you’ll receive an account and agree to our{" "}
                <span className="text-green-400">Terms</span>,{" "}
                <span className="text-green-400">Privacy Policy</span> and{" "}
                <span className="text-green-400">Ticket Purchase Terms</span>.
              </p>
            </div>
          </div>

          {/* RIGHT – IMAGE + SUMMARY */}
          <div className="ml-4">
            <div className="flex gap-6 items-start">
              <img
                src="https://concerts.onlybees.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmohombi_flyer.959f436b.png&w=1080&q=75"
                alt="Mohombi"
                className="w-[230px] h-[310px] rounded-lg object-cover"
              />

              <div className="pt-2">
                <h3 className="text-xl font-bold">
                  Mohombi Live in Shillong
                </h3>
                <p className="text-sm text-gray-400">
                  Lariti, Mawdiangdiang
                </p>
                <p className="text-green-400 text-sm">
                  Sat, Oct 25, 2025
                </p>
                <p className="text-sm text-gray-300">Shillong</p>
              </div>
            </div>

            <h2 className="text-green-500 text-lg font-bold mt-10">
              Order Summary
            </h2>

            <div className="mt-4 space-y-3 text-sm">
              {selectedTickets.map((t) => (
                <div key={t.id} className="flex justify-between">
                  <span>
                    {t.name} ×{ticketQuantities[t.id]}
                  </span>
                  <span>₹{t.price * ticketQuantities[t.id]}</span>
                </div>
              ))}

              <div className="flex justify-between mt-3">
                <span>GST (18%)</span>
                <span>₹{gstAmount}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Coupon Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <div className="border-t border-gray-700 my-4" />

              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-2">
                Have a Coupon Code?
              </label>
              <div className="flex gap-2">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 bg-[#1f1f1f] px-4 py-3 rounded outline-none"
                  placeholder="Enter code here"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-white text-black px-5 rounded font-semibold"
                >
                  APPLY
                </button>
              </div>
              {couponError && (
                <p className="text-red-500 text-xs mt-1">
                  Invalid Coupon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1F1F1F] border-t border-gray-700 py-4">
        <div className="max-w-[1320px] mx-auto px-10 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Total</p>
            <p className="text-2xl font-bold">₹{grandTotal}</p>
          </div>

          <button
  onClick={handleCheckout}
  disabled={!isFormValid}
  className={`px-10 py-3 rounded-full font-semibold transition-all duration-150
    ${
      isFormValid
        ? "bg-green-500 text-black hover:bg-green-600 active:bg-green-700"
        : "bg-gray-600 text-gray-300 cursor-not-allowed"
    }`}
>
  Checkout
</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
