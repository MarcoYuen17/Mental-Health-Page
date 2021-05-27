import { useState } from 'react';
import './App.css';

type TabType = 'gif' | 'links' | 'journal';

const MentalHealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('gif');

  return (
    <div className="App">
      <div>
        Gif
      </div>
      <div>
        Links
      </div>
      <div>
        Journal
      </div>
    </div>
  );
}

export default MentalHealthPage;
