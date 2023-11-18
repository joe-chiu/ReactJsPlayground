import { useEffect, useRef, useState } from "react";
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
  const [messages, setMessages] = useState<ChatMessage[]>(GetHistoryChatMessages());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerHeight = containerRef.current?.clientHeight;
    console.log(`Size chatMessageArea.height = ${containerHeight}px`);
    containerRef.current?.setAttribute("style", `height: ${containerHeight}px;`);
  });

  return (
    <div id="messagePane" className="flex-grow flex flex-col">
      <div id="chatMessageArea" className="flex-grow" ref={containerRef}>
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
