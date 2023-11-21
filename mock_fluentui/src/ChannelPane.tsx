import { useState } from "react";

import { ChannelHeader } from "./ChannelHeader";
import { ChannelMessagePane } from "./ChannelMessagePane";
import { ChatFiles } from "./ChatFiles";
import { ChannelInfoPane } from "./ChannelInfoPane";

enum TeamPaneTab {
  Posts,
  Files
}

export const ChannelPane = () => {
  const [currentTab, setCurrentTab] = useState(TeamPaneTab[TeamPaneTab.Posts]);
  const [showInfoPane, setShowInfoPane] = useState(false);
  
  return (
    <div className="grow flex flex-col bg-indigo-50 shadow-lg">
      <ChannelHeader 
        showOpenIcon={showInfoPane}
        onTabSelect={(tab) => setCurrentTab(tab)}
        onInfoPaneToggle={(newInfoPaneState) => setShowInfoPane(newInfoPaneState)} 
      />
      <div className="grow flex flex-row">
        { currentTab === TeamPaneTab[TeamPaneTab.Posts] && 
          <ChannelMessagePane />
        }
        { currentTab === TeamPaneTab[TeamPaneTab.Posts] && showInfoPane &&          
          <ChannelInfoPane onInfoPaneClose={() => setShowInfoPane(false)} />
        }
        { currentTab === TeamPaneTab[TeamPaneTab.Files] &&
          <ChatFiles />
        }
      </div>
    </div>
  );
};
