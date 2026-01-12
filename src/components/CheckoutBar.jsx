const CheckoutBar = ({ totalQty, totalPrice, handleProceed }) => {
  return (
   <div className="fixed bottom-0 left-0 right-0 bg-[#1F1F1F] border-t border-gray-700 py-0.5">
      
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        
        {/* LEFT: TOTAL */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            Total
          </span>
          <span className="text-2xl font-bold text-white">
            ₹{totalPrice}
          </span>
        </div>

        {/* RIGHT: PROCEED BUTTON */}
        <button
          onClick={handleProceed}
          disabled={!totalQty}
          className={`px-10 py-3 rounded-full font-semibold text-sm transition-all duration-150
            ${
              !totalQty
                ? "bg-green-800 text-gray-300 cursor-not-allowed opacity-60"
                : "bg-[#00FF38] text-black hover:bg-green-500 active:bg-green-600 shadow-lg shadow-green-900/30"
            }`}
        >
          Proceed
        </button>

      </div>
    </div>
  );
};

export default CheckoutBar;
