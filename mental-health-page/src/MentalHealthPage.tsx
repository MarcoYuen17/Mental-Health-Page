import { useState } from 'react';
import './MentalHealthPage.scss';
import { BreathingGif } from './BreathingGif';
import { Links } from './Links';
import { Header } from './Header';

export type TabType = 'gif' | 'links' | 'journal';

const MentalHealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('gif');

  const handleChangeSelected = (tab: TabType) => {
    setSelectedTab(tab);
    document.getElementById(tab)?.scrollIntoView();
  }

  return (
    <div className='mental-health-page'>
      <div className='mental-health-page-header'>
        <Header activeTab={selectedTab} onChangeSelected={handleChangeSelected} />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col1' id='gif'>
        <BreathingGif />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col2' id='links'>
        <Links />
      </div>
      <div className='mental-health-page-content mental-health-page-content-col3' id='journal'>
        Journal
      </div>
    </div>
  );
}

export default MentalHealthPage;
