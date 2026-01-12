const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'venue', label: 'Venue Layout' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <div className="flex gap-8 border-b border-gray-800 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 ${
            activeTab === tab.id
              ? 'border-b-2 border-[#00FF38] text-white'
              : 'text-gray-400'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
