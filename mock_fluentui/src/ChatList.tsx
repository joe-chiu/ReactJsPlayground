import {
  Button,
  Tree, 
  TreeItem, 
  TreeItemLayout,
} from "@fluentui/react-components";

import {
  bundleIcon,
  ComposeRegular,
  ComposeFilled,
  VideoRegular,
  VideoFilled,
  FilterRegular,
  FilterFilled,
} from "@fluentui/react-icons";

const ComposeIcon = bundleIcon(ComposeFilled, ComposeRegular);
const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const FilterIcon = bundleIcon(FilterFilled, FilterRegular);

import { ChatListItem } from "./ChatListItem";

export const ChatList = () => {
  return (
    <div className="flex flex-col w-72 h-full bg-blue-100 shadow-lg">
      <div className="h-14 flex flex-row items-center gap-2 p-3">
        <p className="flex-grow w-52 text-lg font-bold">Chat</p>
        <Button size="medium" appearance="transparent" className="h-8" icon={<FilterIcon />} />
        <Button size="medium" className="h-8" icon={<VideoIcon />} />
        <Button size="medium" className="h-8" icon={<ComposeIcon />} />
      </div>
      <div className="flex-grow">
        <Tree defaultOpenItems={["pinned", "recent"]}>
          <TreeItem itemType="branch" value="pinned">
            <TreeItemLayout><p className="text-sm">Pinned</p></TreeItemLayout>
            <Tree className="">
              <ChatListItem unread />
              <ChatListItem />
              <ChatListItem />
            </Tree>
          </TreeItem>
          <TreeItem itemType="branch" value="recent">
            <TreeItemLayout><p className="text-sm">Recent</p></TreeItemLayout>
            <Tree>
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
            </Tree>
          </TreeItem>
        </Tree>        
      </div>
    </div>
  );
};
