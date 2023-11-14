import React from "react";

import {
  Avatar,
  Button,
  Input,
} from "@fluentui/react-components";

import { Chat, ChatMessage, ChatMyMessage } from '@fluentui-contrib/react-chat';

import {
  bundleIcon,
  SendRegular,
  SendFilled,
  AddRegular,
  AddFilled,
  EmojiRegular,
  EmojiFilled,
} from "@fluentui/react-icons";

const SendIcon = bundleIcon(SendFilled, SendRegular);
const AddIcon = bundleIcon(AddFilled, AddRegular);
const EmojiIcon = bundleIcon(EmojiFilled, EmojiRegular);

const ChatMessagePane = () => {
  return (
    <div className="flex-grow flex flex-col">
      <div id="chatMessageArea" className="flex-grow">
        <Chat>
          <ChatMessage 
            avatar={<Avatar name="Ashley McCarthy" badge={{ status: 'available' }}                
            />}>
            Hello I am Ashley
          </ChatMessage>
          <ChatMyMessage>Nice to meet you!</ChatMyMessage>
          <ChatMessage details={"Ashley McCarthy"} avatar={<Avatar name="Ashley McCarthy" badge={{ status: 'available' }} />}>Hello I am Ashley</ChatMessage>
          <ChatMessage>More messages</ChatMessage>
          <ChatMessage>More messages</ChatMessage>
        </Chat>                          
      </div>
      <div id="composeArea" className="h-16 pt-1 flex flex-row pr-4 pl-4 gap-2">
        <div className="flex-grow">
          <Input className="w-full" placeholder="Type a new message" contentAfter={
            <div>
              <Button size="small" appearance="transparent" icon={<EmojiIcon />} />
              <Button size="small" appearance="transparent" icon={<AddIcon />} />
            </div>
          } />
        </div>
        <div className="">
          <Button icon={<SendIcon />} />
        </div>
      </div>
    </div>
  );
};
          
export default ChatMessagePane;    