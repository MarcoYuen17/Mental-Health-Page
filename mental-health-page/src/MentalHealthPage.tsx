import { useState } from 'react';
import './MentalHealthPage.scss';
import { BreathingGif } from './BreathingGif';
import { Links } from './Links';
import { Header } from './Header';

export type TabType = 'gif' | 'links' | 'journal';

const MentalHealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('gif');

  return (
    <div className="App">
      <div>
        <Header activeTab={selectedTab} onChangeSelected={setSelectedTab} />
      </div>
      <div>
        <BreathingGif />
      </div>
      <div>
        <Links />
      </div>
      <div>
        Journal
      </div>
    </div>
  );
}

export default MentalHealthPage;
