import { useEffect, useState, useRef } from "react";

const summaries = {
  1: "Summary 1",
  2: "Summary 2",
  3: "Summary 3",
  4: "Summary 4",
  5: "Summary 5"
};

function RightPane({ activeMenu, rightPaneRef }) {

  const [activeSummary, setActiveSummary] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if(rightPaneRef.current){
        const summaries = rightPaneRef.current.querySelectorAll('.summary');
        summaries.forEach((summary, index) => {
          const rect = summary.getBoundingClientRect();
          if(rect.top >= 0 && rect.top <= window.innerHeight){
            setActiveSummary(index + 1)
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }, [rightPaneRef]);

  return (
    <div className="right-pane" ref="{rightPaneRef}">
      <h2>Summaries</h2>
      {Object.keys(summaries).map((menuId) => (
        <div key={menuId} id={`summary-${menuId}`} className={`summary ${activeMenu === parseInt(menuId) ? 'active' : ''}`}>
        {summaries[menuId]}
        </div>
      ))}
    </div>
  );
}

export default RightPane;