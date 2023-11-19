import { useState } from "react";

import { ChatHeader } from "./ChatHeader";
import { ChatInfoPane } from "./ChatInfoPane";
import { ChatMessagePane } from "./ChatMessagePane";
import { ChatFiles } from "./ChatFiles";

enum ChatPaneTab {
  Chat,
  Files
}

export const ChatTab = () => {
  const [chatTab, setChatTab] = useState(ChatPaneTab[ChatPaneTab.Chat]);
  const [showInfoPane, setShowInfoPane] = useState(true);
  
  return (
    <div className="grow flex flex-col bg-indigo-50 shadow-lg">
      <ChatHeader 
        showOpenIcon={showInfoPane}
        onTabSelect={(tab) => setChatTab(tab)}
        onInfoPaneToggle={(newInfoPaneState) => setShowInfoPane(newInfoPaneState)} />
      <div className="grow flex flex-row">
        { chatTab === ChatPaneTab[ChatPaneTab.Chat] && 
          <ChatMessagePane />
        }
        { chatTab === ChatPaneTab[ChatPaneTab.Chat] && showInfoPane &&          
          <ChatInfoPane onInfoPaneClose={() => setShowInfoPane(false)} />
        }
        { chatTab === ChatPaneTab[ChatPaneTab.Files] &&
          <ChatFiles />
        }
      </div>
    </div>
  );
};
