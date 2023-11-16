import { useState } from "react";

import {
  Avatar,
  Button,
  Input,
} from "@fluentui/react-components";

import {
  ChatMessage,
  MessageStatus, 
  MessageThread, 
} from "@azure/communication-react";

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

const GetHistoryChatMessages = (): ChatMessage[] => {
  return [
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Hi everyone, I created this awesome group chat for us!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:10'),
      mine: true,
      attached: false,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user2',
      senderDisplayName: 'Robert Tolbert',
      messageId: Math.random().toString(),
      content: 'Nice! This looks great!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: false,
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "Yeah agree, let's chat here from now on!",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: "top",
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "bubble merged",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: true,
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "last message in a chain",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: "bottom",
      contentType: 'text'
    },
    /*
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: "top",
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'bubble merged message from self',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: "bottom",
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user2',
      senderDisplayName: 'Robert Tolbert',
      messageId: Math.random().toString(),
      content: 'Nice! This looks great!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:07'),
      mine: false,
      attached: false,
      contentType: 'text'
    },
    */
  ];
};

const customStyle = {
  chatContainer: {
    background: "rgb(238 242 255)",
    minHeight: 0,
  }
};

export const ChatMessagePane = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(GetHistoryChatMessages());

  return (
    <div className="flex-grow flex flex-col">
      <div id="chatMessageArea" className="flex-grow">
        <MessageThread          
          styles={customStyle}       
          userId={'1'}
          messages={messages}
          onUpdateMessage={async (id, content) => {
            const updated = messages.map((m) =>
              m.messageId === id
                ? { ...m, failureReason: 'Failed to edit', status: 'failed' as MessageStatus }
                : m
            );
            setMessages(updated);
            return Promise.reject('Failed to update');
          }}
          onCancelEditMessage={(id) => {
            const updated = messages.map((m) =>
              m.messageId === id ? { ...m, failureReason: undefined, status: undefined } : m
            );
            setMessages(updated);
          }}
        />
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
