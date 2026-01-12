import Header from "../components/Header";
import EventInfo from "../components/EventInfo";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import EventPoster from "../components/EventPoster";
import EventGuideAndArtist from "../components/EventGuideAndArtist";
import BookingCard from "../components/BookingCard";
import Footer from "../components/Footer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("venue");
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/tickets");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-8">
              <EventInfo />
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabContent activeTab={activeTab} />
            </div>

            {/* RIGHT */}
            <div className="relative flex flex-col items-center lg:items-end gap-6">
              <EventPoster />
              <div className="w-full max-w-md">
                <BookingCard onBookNow={handleBookNow} />
              </div>
            </div>
          </div>

          {/* FULL WIDTH SECTION */}
          <div className="mt-16">
            <EventGuideAndArtist />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
