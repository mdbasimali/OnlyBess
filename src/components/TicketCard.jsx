import React from "react";

const TicketCard = ({ section, quantity, onIncrease, onDecrease }) => {
  const isSoldOut = section.soldOut;
  const maxLimit = section.maxQty || 10;
  const isMaxReached = quantity >= maxLimit;

  return (
    <div className="bg-[#1E1E1E] rounded-xl p-5 mb-4 flex justify-between items-start w-full max-w-2xl mx-auto">
      
      {/* LEFT SIDE */}
      <div className="flex-1 pr-6">
        {/* TITLE */}
        <h3 className="text-white text-lg font-semibold">
          {section.name}
        </h3>

        {/* PRICE */}
        <div className="mt-1 flex items-baseline gap-2">
          <span
            className={`text-xl font-bold ${
              isSoldOut ? "text-gray-500 line-through" : "text-[#00FF38]"
            }`}
          >
            ₹{section.price}
          </span>
          <span className="text-xs text-gray-400">
            Excl. taxes
          </span>
        </div>

        {/* FEATURES */}
        {section.features && (
          <div className="mt-3 space-y-1">
            {section.features.map((feature, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm flex items-start"
              >
                <span className="mr-2 text-[#00FF38]">•</span>
                {feature}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-center">
        {isSoldOut ? (
          /* SOLD OUT */
          <div className="px-4 py-2 rounded-md text-xs font-bold uppercase text-red-500 border border-red-500/40">
            Sold Out
          </div>
        ) : (
          /* QUANTITY CONTROLS */
          <div className="flex items-center bg-black rounded-md overflow-hidden">
            
            {quantity > 0 && (
              <>
                <button
                  onClick={onDecrease}
                  className="w-10 h-10 flex items-center justify-center text-white bg-[#1E1E1E] hover:bg-gray-700 transition"
                >
                  −
                </button>

                <span className="w-10 h-10 flex items-center justify-center text-white font-semibold">
                  {quantity}
                </span>
              </>
            )}

            <button
              onClick={onIncrease}
              disabled={isMaxReached}
              className={`h-10 flex items-center justify-center font-bold transition
                ${quantity === 0 ? "w-12" : "w-10"}
                ${
                  isMaxReached
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-[#00FF38] text-black hover:brightness-110"
                }
              `}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
