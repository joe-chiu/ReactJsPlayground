import { useState } from "react";

import { ChatHeader } from "./ChatHeader";
import { ChatInfoPane } from "./ChatInfoPane";
import { ChatMessagePane } from "./ChatMessagePane";
import { ChatFiles } from "./ChatFiles";

enum ChatTab {
  Chat,
  Files
}

export const ChatContent = () => {
  const [chatTab, setChatTab] = useState(ChatTab[ChatTab.Chat]);
  const [showInfoPane, setShowInfoPane] = useState(true);
  
  return (
    <div className="flex-grow flex flex-col bg-indigo-50 shadow-lg">
      <ChatHeader 
        showOpenIcon={showInfoPane}
        onTabSelect={(tab) => setChatTab(tab)}
        onInfoPaneToggle={(newInfoPaneState) => setShowInfoPane(newInfoPaneState)} />
      <div className="flex-grow flex flex-row">
        { chatTab === ChatTab[ChatTab.Chat] && 
          <ChatMessagePane />
        }
        { chatTab === ChatTab[ChatTab.Chat] && showInfoPane &&          
          <ChatInfoPane onInfoPaneClose={() => setShowInfoPane(false)} />
        }
        { chatTab === ChatTab[ChatTab.Files] &&
          <ChatFiles />
        }
      </div>
    </div>
  );
};
