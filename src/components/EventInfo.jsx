import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

const EventInfo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <FaMapMarkerAlt />
        <span>Lariti, Mawdiangdiang</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Mohombi Live in Shillong
      </h1>

      <div className="flex items-center gap-3 mb-2">
        <MdEventAvailable className="text-[#00FF38]" />
        <span className="text-[#00FF38]">
          Sat, Oct 25, 2025, 3:00 PM
        </span>
        <span className="text-gray-400 text-sm">GMT +5:30</span>
      </div>

      <div className="text-gray-400 mb-8">Shillong</div>
    </div>
  );
};

export default EventInfo;
