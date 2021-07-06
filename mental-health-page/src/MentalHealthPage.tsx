import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { BreathingGif } from './BreathingGif';
import { Links } from './Links';
import { Journal } from './Journal';
import { Header } from './Header';

import './MentalHealthPage.scss';

export type TabType = 'gif' | 'journal' | 'links';

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
      <div className='mental-health-page-content mental-health-page-content-col2' id='journal'>
        <DndProvider backend={HTML5Backend}>
          <Journal />
        </DndProvider>
      </div>
      <div className='mental-health-page-content mental-health-page-content-col3' id='links'>
        <Links />
      </div>
    </div>
  );
}

export default MentalHealthPage;
