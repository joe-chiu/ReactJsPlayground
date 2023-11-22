import { Button, Tree, TreeItem, TreeItemLayout, TreeOpenChangeData } from "@fluentui/react-components";
import {
  bundleIcon,
  FilterRegular,
  FilterFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
} from "@fluentui/react-icons";

import { ActivityItem, ActivityItemProps } from "./ActivityItem";
import { ChatPane } from "./ChatPane";
import { useState } from "react";
import { ChannelPane } from "./ChannelPane";

const FilterIcon = bundleIcon(FilterFilled, FilterRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

const feedData = (): ActivityItemProps[] => {
  return [
    {
      type: "chatMention",
      reason: "Adele mentioned you",
      imageUrl: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
      preview: "Hey, could you take a look at this",
      topic: "Chat with Adele",
      timestamp: "11:40 AM",
      unread: false,        
    },
    {
      type: "chatMention",
      reason: "Adele mentioned you",
      imageUrl: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
      preview: "Hey, could you take a look at this",
      topic: "Chat with Adele",
      timestamp: "11:40 AM",
      unread: false,        
    },
    {
      type: "channelMention",
      reason: "Adele mentioned you",
      imageUrl: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
      preview: "Hey, could you take a look at this",
      topic: "Mark 8 Project Team > Design",
      timestamp: "10:40 AM",
      unread: false,        
    },
  ]
};

export interface ActivityTabProps {
  onItemSelect?: (e: TreeOpenChangeData) => void;
}

export const ActivityTab = (props: ActivityTabProps) => {
  const [openView, setOpenView] = useState("chatMention");

  return (
    <div id="feedTab" className="grow flex flex-row bg-indigo-50">
      <div id="feedList" className="flex-none w-80 flex flex-col shadow-lg">
        <div id="feedHeader" className="flex-none h-14 flex flex-row items-center gap-2 p-3">
          <p className="grow w-52 text-lg font-bold">Feed</p>
          <Button size="medium" appearance="transparent" className="h-8" icon={<FilterIcon />} />
          <Button size="medium" appearance="transparent" className="h-8" icon={<MoreIcon />} />
        </div>
        <div id="feedListContent" className="grow">
          <Tree aria-label="feed list" 
            onOpenChange={(e, data) => {
              let prop = JSON.parse(data.value.toString()) as ActivityItemProps;
              setOpenView(prop.type ?? "chatMention");
            }}>

            {feedData().map((item, i) => (
            <ActivityItem key={i} {...item} />
            ))}
          </Tree>
        </div>
      </div>
      <div id="feedPane" className="grow flex flex-col min-h-0">
        {openView == "chatMention" &&
        <ChatPane />
        }
        {openView == "channelMention" &&
        <ChannelPane />
        }
      </div>
    </div>
  );
};
