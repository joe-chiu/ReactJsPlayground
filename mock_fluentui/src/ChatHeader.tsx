import React, { useState } from "react";

import {
  Avatar,
  Tab,
  TabList,
  Button,
} from "@fluentui/react-components";

import {
  bundleIcon,
  VideoRegular,
  VideoFilled,
  CallRegular,
  CallFilled,
  PanelRightContractRegular,
  PanelRightContractFilled,
} from "@fluentui/react-icons";

const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const CallIcon = bundleIcon(CallFilled, CallRegular);
const PaneCloseIcon = bundleIcon(PanelRightContractFilled, PanelRightContractRegular);

export interface ChatHeaderProps {
  startWithInfoPane?: boolean,
  onTabSelect?: (tab: string) => void,
  onInfoPaneToggle?: (infoPaneShown: boolean) => void,
}

const ChatHeader = ({startWithInfoPane = true, ...props} : ChatHeaderProps) => {
  const [infoPaneState, setInfoPaneState] = useState(startWithInfoPane);

  return (
    <div className="h-14 flex flex-row items-center pl-4 pr-4 border-b-2 border-blue-100">
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
        <TabList defaultSelectedValue="Chat" 
          onTabSelect={(e, data) => props.onTabSelect && props.onTabSelect(data.value as string)} >
          <Tab value="Chat">
            <p className="">Chat</p>
          </Tab>
          <Tab value="Files">
            <p className="">Files</p>
          </Tab>
        </TabList>
      </div>
      <div className="flex flex-row">
        <Button size="medium" icon={<VideoIcon />} />
        <Button size="medium" icon={<CallIcon />} />
        <div className="w-2"></div>
        <Button size="medium" icon={<PaneCloseIcon />} 
          onClick={(e) => { 
            setInfoPaneState(!infoPaneState);
            props.onInfoPaneToggle && props.onInfoPaneToggle(!infoPaneState);
          }} />
      </div>
    </div>
  );
};
    
export default ChatHeader;  