import { useNavigate } from "react-router-dom";
import TicketCard from "../components/TicketCard";
import TicketCardSkeleton from "../components/TicketCardSkeleton";
import VenueLayoutContent from "../components/VenueLayoutContent";
import CheckoutBar from "../components/CheckoutBar";

const TicketSelectionPage = ({
  sections,
  loading,
  ticketQuantities,
  updateQuantity,
  getTotalQuantity,
  getGrandTotal,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* MAIN CONTAINER: Controls Layout & Gap (Left/Right) */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <h1 className="text-green-500 text-3xl font-bold pt-8">
          TICKETS
        </h1>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-16 mt-8">
          
          {/* LEFT – TICKET LIST */}
          <div className="space-y-6">
            {loading ? (
              <>
                <TicketCardSkeleton />
                <TicketCardSkeleton />
                <TicketCardSkeleton />
                <TicketCardSkeleton />
                <TicketCardSkeleton />
              </>
            ) : (
              sections.map((section) => (
                <TicketCard
                  key={section.id}
                  section={section}
                  quantity={ticketQuantities[section.id] || 0}
                  onIncrease={() => updateQuantity(section.id, 1)}
                  onDecrease={() => updateQuantity(section.id, -1)}
                />
              ))
            )}
          </div>

          {/* RIGHT – VENUE */}
          <VenueLayoutContent />
        </div>
      </div>

      {/* CHECKOUT BAR */}
      <CheckoutBar
        totalQty={getTotalQuantity()}
        totalPrice={getGrandTotal()}
        handleProceed={() => navigate("/checkout")}
      />
    </div>
  );
};

export default TicketSelectionPage;