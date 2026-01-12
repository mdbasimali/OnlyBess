import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TicketSelectionPage from './pages/TicketSelectionPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  // DATA STATES
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ticketQuantities, setTicketQuantities] = useState({});

  // UPDATED DATA BASED ON YOUR TEXT
  const screenshotData = [
    {
      id: "ga-phase2",
      name: "GA (Phase 2)",
      price: 1249,
      soldOut: false,
      features: [
        "Entry only",
        "Easy access to the bar"
      ]
    },
    {
      id: "ga-vip-phase2",
      name: "GA VIP (Phase 2)",
      price: 1999,
      soldOut: false,
      features: [
        "Exclusive front-row near the stage",
        "Easy access to the bar"
      ]
    },
    {
      id: "vvip-lounge-person",
      name: "VVIP Lounge/Round Table (per person)",
      price: 4999,
      soldOut: false,
      features: [
        "Unlimited food & beverages for 180 minutes (7pm - 10 pm)",
        "Access to all areas",
        "Exclusive round table service",
        "Unlimited IMFL pouring",
        "Clear and unobstructed view of the stage"
      ]
    },
    {
      id: "vvip-round-6",
      name: "VVIP Round Table (upto 6 persons)",
      price: 24999,
      soldOut: false,
      maxQty: 6, // Usually limited per booking
      features: [
        "Exclusive round table",
        "Unlimited food & beverages for 180 minutes (7pm - 10 pm)",
        "Access to all areas",
        "Round table service",
        "Unlimited IMFL pouring",
        "Clear and unobstructed view of the stage"
      ]
    },
    {
      id: "ga-early",
      name: "GA (Early Bird)",
      price: 799,
      soldOut: true, // Sold Out
      features: [
        "Entry only",
        "Easy access to the bar"
      ]
    },
    {
      id: "ga-vip-early",
      name: "GA VIP (Early Bird)",
      price: 1399,
      soldOut: true, // Sold Out
      features: [
        "Exclusive front-row near the stage",
        "Easy access to the bar"
      ]
    }
  ];

  // FETCH DATA
  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      
      // Using Static Data
      let sectionList = screenshotData;

      // Ensure IDs exist
      sectionList = sectionList.map((item, index) => ({
        ...item,
        id: item.id || item._id || `temp_id_${index}` 
      }));

      setSections(sectionList);

      // Initialize Quantities
      const initialQty = {};
      sectionList.forEach(section => {
        initialQty[section.id] = 0;
      });

      setTicketQuantities(initialQty);

    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE TICKET QTY
  const updateQuantity = (sectionId, delta) => {
    setTicketQuantities(prev => {
      const section = sections.find(s => s.id === sectionId);
      const currentQty = prev[sectionId] || 0;
      const maxQty = section?.maxQty ?? 10; 
      const nextQty = currentQty + delta;

      if (nextQty < 0) return prev;
      if (nextQty > maxQty) return prev;
      if (section.soldOut && delta > 0) return prev;

      return {
        ...prev,
        [sectionId]: nextQty,
      };
    });
  };

  // CALCULATIONS (NO GST)
  const getTotalQuantity = () =>
    Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0);

  const getSubTotal = () =>
    sections.reduce(
      (sum, s) => sum + (ticketQuantities[s.id] || 0) * s.price,
      0
    );

  const getGrandTotal = () => getSubTotal();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/tickets"
        element={
          <TicketSelectionPage
            sections={sections}
            loading={loading}
            ticketQuantities={ticketQuantities}
            updateQuantity={updateQuantity}
            getTotalQuantity={getTotalQuantity} 
            getSubTotal={getSubTotal}
            getGrandTotal={getGrandTotal}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            sections={sections}
            ticketQuantities={ticketQuantities}
            getGrandTotal={getGrandTotal}
          />
        }
      />
    </Routes>
  );
};

export default App;