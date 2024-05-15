import { useState, useRef } from "react";
import LeftPane from "../LeftPane";
import RightPane from "../RightPane";
import './styles.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(1);
  const rightPaneRef = useRef(null);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    if (rightPaneRef.current) {
      const summaryElement = rightPaneRef.current.querySelector(
        `#summary-${menuId}`
      );
      if (summaryElement) {
        summaryElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="app-container">
      <LeftPane activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <RightPane activeMenu={activeMenu} rightPaneRef={rightPaneRef} />
    </div>
  );
}

export default App;
