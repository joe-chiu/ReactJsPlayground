import { useState } from "react";

import { TeamHeader } from "./TeamHeader";
import { TeamMessagePane } from "./TeamMessagePane";
import { ChatFiles } from "./ChatFiles";

enum TeamPaneTab {
  Posts,
  Files
}

export const TeamsPane = () => {
  const [currentTab, setCurrentTab] = useState(TeamPaneTab[TeamPaneTab.Posts]);
  const [showInfoPane, setShowInfoPane] = useState(false);
  
  return (
    <div className="grow flex flex-col bg-indigo-50 shadow-lg">
      <TeamHeader 
        showOpenIcon={showInfoPane}
        onTabSelect={(tab) => setCurrentTab(tab)}
        onInfoPaneToggle={(newInfoPaneState) => setShowInfoPane(newInfoPaneState)} 
      />
      <div className="grow flex flex-row">
        { currentTab === TeamPaneTab[TeamPaneTab.Posts] && 
          <TeamMessagePane />
        }
        { currentTab === TeamPaneTab[TeamPaneTab.Files] &&
          <ChatFiles />
        }
      </div>
    </div>
  );
};
