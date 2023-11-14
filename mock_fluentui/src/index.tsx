import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

import LeftNav from "./LeftNav";
import TopBar from "./TopBar";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";

enum TeamsTab {
  Activity,
  Chat,
  Teams,
  Calendar,
  Files
}

const TeamsApp = () => {
  const [activeApp, setActiveApp] = useState(TeamsTab[TeamsTab.Chat]);

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="flex flex-col w-full h-full bg-red-300">
        <TopBar />
        <div className="flex flex-row h-full">
          <LeftNav onAppSelect={(app) => setActiveApp(app)} />
          { activeApp === TeamsTab[TeamsTab.Chat] &&
            <ChatList />
          }
          { activeApp === TeamsTab[TeamsTab.Chat] &&
            <ChatContent />
          }
        </div>
      </div>
    </FluentProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <TeamsApp />
  </React.StrictMode>
  ,
  document.getElementById("root")
);