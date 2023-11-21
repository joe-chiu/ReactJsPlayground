import { useState } from "react";
import { initializeIcons, registerIcons } from '@fluentui/react';

import { 
  Menu, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  MenuPopover, 
  MenuTrigger, 
  Popover, 
  PopoverSurface, 
  PopoverTrigger, 
  Toolbar, 
  ToolbarButton, 
  ToolbarDivider 
} from "@fluentui/react-components";

import {
  ChatMessage,
  FluentThemeProvider,
  MessageThread,
  DEFAULT_COMPONENT_ICONS,
  MessageProps,
  MessageRenderer,
} from "@azure/communication-react";

import { Compose } from "./Compose";
import { GetHistoryChatMessages, GetHistoryChatMessagesScroll } from "./data";

initializeIcons();
registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

import {
  bundleIcon,
  ArrowReplyDownRegular,
  ArrowReplyDownFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  EmojiAddRegular,
  EmojiAddFilled,
  PinRegular,
  PinFilled,
  BookmarkRegular,
  BookmarkFilled,
  GlassesOffRegular,
  GlassesOffFilled,
} from "@fluentui/react-icons";   

const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const EmojiAddIcon = bundleIcon(EmojiAddFilled, EmojiAddRegular);
const ReplyIcon = bundleIcon(ArrowReplyDownFilled, ArrowReplyDownRegular);
const PinIcon = bundleIcon(PinFilled, PinRegular);
const BookmarkIcon = bundleIcon(BookmarkFilled, BookmarkRegular);
const GlassesOffIcon = bundleIcon(GlassesOffFilled, GlassesOffRegular);

const customStyle = {
  chatContainer: {
    backgroundColor: "rgb(238 242 255)",
    maxWidth: "none",
  }
};

interface MessageMenuProps {
	content: JSX.Element,
}

const MessageMenu = ({content}: MessageMenuProps) => {
  return (
    <Popover inline={true} openOnHover={true} positioning={"above-end"}>
      <PopoverTrigger disableButtonEnhancement>
        {content}
      </PopoverTrigger>                
      <PopoverSurface style={{padding: 0}}>
        <Toolbar aria-label="Default">
          <ToolbarButton icon="&#128077;" />
          <ToolbarButton icon="&#10084;&#65039;" />
          <ToolbarButton icon="&#128518;" />
          <ToolbarButton icon="&#128558;" />
          <ToolbarButton aria-label="more reactions" icon={<EmojiAddIcon />} />
          <ToolbarDivider />
          <Menu inline={true}>
            <MenuTrigger>
              <ToolbarButton aria-label="More" icon={<MoreIcon />} />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem icon={<ReplyIcon />}>Reply</MenuItem>
                <MenuItem icon={<PinIcon />}>Pin</MenuItem>
                <MenuDivider />
                <MenuItem icon={<BookmarkIcon />}>Save this message</MenuItem>
                <MenuItem icon={<GlassesOffIcon />}>Mark as unread</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Toolbar>
      </PopoverSurface>
    </Popover>                  
  );
};

export const ChatMessagePane = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(GetHistoryChatMessagesScroll());
  const onRenderMessage = (messageProps: MessageProps, defaultOnRender?: MessageRenderer): JSX.Element => {
    const chatMessage = messageProps.message as ChatMessage;
    if (!chatMessage.mine) {
      return (
        <MessageMenu content={defaultOnRender ? defaultOnRender(messageProps) : <></>} />
      );
    }

    return defaultOnRender ? defaultOnRender(messageProps) : <></>;
  };

  return (
    <div id="messagePane" className="grow flex flex-col">
      { /* the h-52 somehow works like min-height and is crucial to make the layout work */ }
      <div id="chatMessageArea" className="grow h-52">
        <FluentThemeProvider>
          <MessageThread
            userId={'1'}
            messages={messages}
            styles={customStyle}
            onRenderMessage={onRenderMessage}
          />
        </FluentThemeProvider>
      </div>
      <Compose />
    </div>
  );
};
