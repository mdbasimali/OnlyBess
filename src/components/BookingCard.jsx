const BookingCard = ({ onBookNow }) => (
  <div className="bg-[#1E1E1E] p-6 rounded-lg">
    <p className="text-gray-400">Starting</p>
    <p className="text-3xl font-bold mb-4">₹799</p>
    <button
      onClick={onBookNow}
      className="bg-[#00FF38] text-black px-6 py-3 rounded-lg font-bold"
    >
      Book Now
    </button>
  </div>
);

export default BookingCard;
