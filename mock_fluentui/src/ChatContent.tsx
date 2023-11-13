import React from "react";

import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Avatar,
  Tab,
  TabList,
  Button,
  Input,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";

import {
  bundleIcon,
  AlertRegular, 
  AlertFilled,
  VideoRegular,
  VideoFilled,
  CallRegular,
  CallFilled,
  PanelRightContractRegular,
  PanelRightContractFilled,
  SendRegular,
  SendFilled,
  AddRegular,
  AddFilled,
  EmojiRegular,
  EmojiFilled,
  LinkRegular,
  LinkFilled,
  AppsRegular,
  AppsFilled,
  PersonDeleteRegular,
  PersonDeleteFilled,
  DismissRegular,
  DismissFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

import { Chat, ChatMessage, ChatMyMessage } from '@fluentui-contrib/react-chat';

const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const CallIcon = bundleIcon(CallFilled, CallRegular);
const PaneCloseIcon = bundleIcon(PanelRightContractFilled, PanelRightContractRegular);
const SendIcon = bundleIcon(SendFilled, SendRegular);
const AddIcon = bundleIcon(AddFilled, AddRegular);
const EmojiIcon = bundleIcon(EmojiFilled, EmojiRegular);
const AlertIcon = bundleIcon(AlertFilled, AlertRegular);
const LinkIcon = bundleIcon(LinkFilled, LinkRegular);
const AppsIcon = bundleIcon(AppsFilled, AppsRegular);
const LeaveIcon = bundleIcon(PersonDeleteFilled, PersonDeleteRegular);
const DismissIcon = bundleIcon(DismissFilled, DismissRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];


const ChatContent = () => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <div className="flex-grow flex flex-col h-full bg-indigo-50 shadow-lg">
      <div className="h-12 flex flex-row items-center pl-4 pr-4 border-b-2 border-blue-100">
          <div className="">
            <Avatar
              name="Katri Athokas"
              image={{
                src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
              }}
            />
          </div>
          <div className="w-auto pl-2 pr-2 text-md font-bold">Weekend escape</div>
          <div className="flex-grow">
            <TabList defaultSelectedValue="tab1" >
              <Tab value="tab1">
                <p className="">Chat</p>
              </Tab>
              <Tab value="tab2">
                <p className="">Files</p>
              </Tab>
            </TabList>
          </div>
          <div className="flex flex-row">
            <Button size="medium" icon={<VideoIcon />} />
            <Button size="medium" icon={<CallIcon />} />
            <div className="w-2"></div>
            <Button size="medium" icon={<PaneCloseIcon />} />
          </div>
      </div>
      <div className="flex-grow flex flex-row">
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            <Chat>
              <ChatMessage 
                avatar={<Avatar name="Ashley McCarthy" badge={{ status: 'available' }}
                
                />}>
                Hello I am Ashley
              </ChatMessage>
              <ChatMyMessage>Nice to meet you!</ChatMyMessage>
              <ChatMessage details={"Ashley McCarthy"} avatar={<Avatar name="Ashley McCarthy" badge={{ status: 'available' }} />}>Hello I am Ashley</ChatMessage>
              <ChatMessage>Hello I am Ashley</ChatMessage>
            </Chat>                          
          </div>
          <div className="h-16 pt-1 flex flex-row pr-4 pl-4 gap-2">
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
        <div className="w-60 flex flex-col border-l-2 border-blue-100">
          <div className="ml-auto">
            <Button size="small" appearance="transparent" icon={<DismissIcon />} />
          </div>
          <div className="flex flex-row items-center p-2">
            <Avatar
                size={40}
                image={{
                  src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                }}
              />
            <div className="w-auto text-md pl-2 pr-2 font-bold">Weekend escape</div>
            <Button size="small" appearance="transparent" icon={<EditIcon />} />
          </div>
          <div className="flex flex-col p-2 items-start">
            <p className="font-bold pb-2">People (3)</p>
            <AvatarGroup size={24}>
              {inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {overflowItems && (
                <AvatarGroupPopover indicator="count">
                  {overflowItems.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
          <div className="flex-grow flex flex-col items-start">
            <p className="font-bold p-2">Options</p>
            <Button size="small" appearance="transparent" icon={<AlertIcon />}>Mute</Button>
            <Button size="small" appearance="transparent" icon={<LinkIcon />}>Copy link to chat</Button>
            <Button size="small" appearance="transparent" icon={<AppsIcon />}>Manage apps</Button>
            <Button size="small" appearance="transparent" icon={<LeaveIcon />}>Leave</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
    
export default ChatContent;  