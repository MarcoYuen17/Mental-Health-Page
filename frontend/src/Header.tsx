import { TabType } from './MentalHealthPage';

type HeaderTabProps = {
  label: TabType;
  isActive?: boolean;
  onClick: (label: TabType) => void;
};

const HeaderTab: React.FC<HeaderTabProps> = (props) => {
  const properLabel = props.label[0].toUpperCase() + props.label.substr(1);

  return (
    <div className='header-label' onClick={() => props.onClick(props.label)}>
      <p>
        {properLabel}
      </p>
      {props.isActive && <div className='header-label-selected'/>}
    </div>
  );
}

type HeaderProps = {
  activeTab: TabType;
  onChangeSelected: (newSelected: TabType) => void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const tabs: TabType[] = ['gif', 'journal', 'links'];

  return (
    <div className='header-container'>
      <div/>
      {tabs.map((tab: TabType) => {
        return (
          <HeaderTab 
            key={tab}
            label={tab} 
            isActive={props.activeTab === tab} 
            onClick={props.onChangeSelected} 
          />
        );
      })}
      <div/>
    </div>
  );
}