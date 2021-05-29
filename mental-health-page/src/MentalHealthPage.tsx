import { useState } from 'react';
import './App.css';
import { BreathingGif } from './BreathingGif';
import { Links } from './Links';

type TabType = 'gif' | 'links' | 'journal';

const MentalHealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('gif');

  return (
    <div className="App">
      <div>
        Header
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
