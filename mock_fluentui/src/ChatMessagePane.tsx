import { useState } from "react";
import { initializeIcons, registerIcons } from '@fluentui/react';

import {
  ChatMessage,
  FluentThemeProvider,
  MessageThread,
  DEFAULT_COMPONENT_ICONS,
} from "@azure/communication-react";

import { Compose } from "./Compose";
import { GetHistoryChatMessages, GetHistoryChatMessagesScroll } from "./data";

initializeIcons();
registerIcons({ icons: DEFAULT_COMPONENT_ICONS });


const customStyle = {
  chatContainer: {
    backgroundColor: "rgb(238 242 255)",
    maxWidth: "none",
  }
};

export const ChatMessagePane = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(GetHistoryChatMessagesScroll());

  return (
    <div id="messagePane" className="flex-grow flex flex-col">
      { /* the h-52 somehow works like min-height and is crucial to make the layout work */ }
      <div id="chatMessageArea" className="flex-grow h-52">
        <FluentThemeProvider>
          <MessageThread
            userId={'1'}
            messages={messages}
            styles={customStyle}
          />
        </FluentThemeProvider>
      </div>
      <Compose />
    </div>
  );
};
