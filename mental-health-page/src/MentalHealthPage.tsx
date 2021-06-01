import { useState } from 'react';
import './MentalHealthPage.scss';
import { BreathingGif } from './BreathingGif';
import { Links } from './Links';
import { Header } from './Header';

export type TabType = 'gif' | 'links' | 'journal';

const MentalHealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('gif');

  return (
    <div className='mental-health-page'>
      <div className='mental-health-page-header'>
        <Header activeTab={selectedTab} onChangeSelected={setSelectedTab} />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col1'>
        <BreathingGif />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col2' style={{gridColumn: 2}}>
        <Links />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col3'>
        Journal
      </div>
    </div>
  );
}

export default MentalHealthPage;
