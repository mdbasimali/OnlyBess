import mohombiImg from "../assets/mohombi.jpg";

const EventGuideAndArtist = () => {
  return (
    <div className="mt-14 space-y-10">

      {/* ================= EVENT GUIDE ================= */}
      {/* EVENT GUIDE */}
<div>
  <h2 className="text-lg font-semibold mb-4">Event Guide</h2>

  <div
    className="
      w-full
      bg-[#1E1E1E]
      rounded-xl
      px-8 py-5
      flex flex-col sm:flex-row
      items-start sm:items-center
      justify-start
      gap-6 sm:gap-20
    "
  >
    {/* Language */}
    <div className="flex items-center gap-3">
      <span className="text-[#00FF38] text-lg">🌐</span>
      <div>
        <p className="text-xs text-gray-400">Language</p>
        <p className="text-sm font-semibold">English</p>
      </div>
    </div>

    {/* Duration */}
    <div className="flex items-center gap-3">
      <span className="text-[#00FF38] text-lg">⏱</span>
      <div>
        <p className="text-xs text-gray-400">Duration</p>
        <p className="text-sm font-semibold">TBI</p>
      </div>
    </div>

    {/* Entry Allowed */}
    <div className="flex items-center gap-3">
      <span className="text-[#00FF38] text-lg">🎟</span>
      <div>
        <p className="text-xs text-gray-400">Entry Allowed</p>
        <p className="text-sm font-semibold">14 yrs & above</p>
      </div>
    </div>
  </div>
</div>


      {/* ================= ARTIST ================= */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Artist</h2>

        <div className="flex items-center gap-5">
          {/* IMAGE WITH LINK */}
          <a
            href="https://en.wikipedia.org/wiki/Mohombi"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
         <img
  src={mohombiImg}
  alt="Mohombi"
  className="
    w-40 h-50
    sm:w-45 sm:h-55
    rounded-xl
    object-cover
    hover:scale-105
    transition duration-300
    hover:shadow-[0_0_18px_#00FF38]
  "
/>
          </a>

          {/* TEXT */}
          <div>
            <p className="text-base font-semibold">Mohombi</p>
            <p className="text-sm text-gray-400">
              Musician, Singer, Composer and Dancer
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EventGuideAndArtist;
