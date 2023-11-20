import { useState } from "react";

import { ChatHeader } from "./ChatHeader";
import { ChatInfoPane } from "./ChatInfoPane";
import { ChatMessagePane } from "./ChatMessagePane";
import { ChatFiles } from "./ChatFiles";

enum ChatPaneTab {
  Chat,
  Files
}

export const ChatPane = () => {
  const [currentTab, setCurrentTab] = useState(ChatPaneTab[ChatPaneTab.Chat]);
  const [showInfoPane, setShowInfoPane] = useState(true);
  
  return (
    <div className="grow flex flex-col bg-indigo-50 shadow-lg">
      <ChatHeader 
        showOpenIcon={showInfoPane}
        onTabSelect={(tab) => setCurrentTab(tab)}
        onInfoPaneToggle={(newInfoPaneState) => setShowInfoPane(newInfoPaneState)} 
      />
      <div className="grow flex flex-row">
        { currentTab === ChatPaneTab[ChatPaneTab.Chat] && 
          <ChatMessagePane />
        }
        { currentTab === ChatPaneTab[ChatPaneTab.Chat] && showInfoPane &&          
          <ChatInfoPane onInfoPaneClose={() => setShowInfoPane(false)} />
        }
        { currentTab === ChatPaneTab[ChatPaneTab.Files] &&
          <ChatFiles />
        }
      </div>
    </div>
  );
};
