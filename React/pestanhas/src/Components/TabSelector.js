import React, {useState} from 'react';
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import Tab3 from "./Components/Tab3";


const TabSelector = (props) => {
const [currentTab, setCurrentTab] = useState('Tab1');
const drawTab = () => {
  if (currentTab === 'Tab1') {
    return <Tab1 />;
  }
  else if (currentTab === 'Tab2') {
    return <Tab2 />;
  }
  else if (currentTab === 'Tab3') {
    return <Tab3 />;
  }
};
const handleOnClick = e => {
  setCurrentTab(e.target.name);
}

return (
  <div className="App">
    <button name="Tab1" onClick={handleOnClick}>Tab 1</button>
    <button name="Tab2" onClick={handleOnClick}>Tab 2</button>
    <button name="Tab3" onClick={handleOnClick}>Tab 3</button>
    <div id="contentTabSelected">{drawTab()}</div>
  </div>
);
};

export default TabSelector;