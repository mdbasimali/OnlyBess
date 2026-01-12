import AboutContent from './AboutContent';
import VenueLayoutContent from './VenueLayoutContent';
import TermsContent from './TermsContent';
import FAQContent from './FAQContent';

const TabContent = ({ activeTab }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6">
      {activeTab === 'about' && <AboutContent />}
      {activeTab === 'venue' && <VenueLayoutContent />}
      {activeTab === 'terms' && <TermsContent />}
      {activeTab === 'faq' && <FAQContent />}
    </div>
  );
};

export default TabContent;
