const TicketCardSkeleton = () => {
  return (
    <div className="bg-[#2A2A2A] rounded-xl px-6 py-5 flex justify-between items-center animate-pulse">
      {/* LEFT */}
      <div className="space-y-3 w-2/3">
        <div className="h-5 bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-700 rounded-full"></div>
        <div className="w-6 h-5 bg-gray-600 rounded"></div>
        <div className="w-9 h-9 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default TicketCardSkeleton;
