import { useState } from "react";

import {
  Button, 
  Menu, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  MenuPopover, 
  MenuTrigger, 
  PresenceBadgeStatus,
  TreeItem,
  TreeItemPersonaLayout,
  makeStyles,
} from "@fluentui/react-components";

import {
  bundleIcon,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  GlassesOffRegular,
  PinOffRegular,
  PinRegular,
  AlertOffRegular,
  EyeOffRegular,
  ProhibitedRegular,
  DeleteRegular,
} from "@fluentui/react-icons";

const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

import { TeamsAvatar } from "./TeamsAvatar";

export interface ChatListItemProps {
  displayName?: string,
  status?: PresenceBadgeStatus,
  imageUrl?: string,
  lastMessagePreview?: string,
  lastMessageTime?: string
  unread? : boolean,
  group?: "pinned" | "recent"
}

const useCustomStyles = makeStyles({
  root: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  main: {
    paddingTop: "2px",
  },
  description: {
    paddingBottom: "2px",
  }
});

export const ChatListItem = ({
  displayName = "Katri Athokas",
  status = "available",
  imageUrl = "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
  lastMessagePreview = "Sure, I'll set up something for the next week to something something",
  lastMessageTime = "11:40 AM",
  unread = false,
  group = "recent",
  }: ChatListItemProps) => {

  const customStyle = useCustomStyles();
  const [hover, setHover] = useState(false);
  
  return (
    <TreeItem itemType="leaf">
      <TreeItemPersonaLayout
        className={customStyle.root}
        main={{
          className: customStyle.main,
          children:
            <div className={`flex flex-row items-baseline ${unread && "font-bold"}`}>
              <p className="flex-grow">{displayName}</p>
              {!hover &&
              <p className="text-xs text-slate-700">{lastMessageTime}</p>
              }
            </div>					
        }}
        media={
          <TeamsAvatar 
            imageUrl={imageUrl} 
            status={status}
          />}
        description={{
          className: customStyle.description,
          children:
            <p className={`line-clamp-1 text-xs text-slate-700 ${unread && "font-bold"}`}>{lastMessagePreview}</p>
        }}
        actions={
          <Menu positioning={"below-end"}>
            <MenuTrigger disableButtonEnhancement>
            <Button
            aria-label="More options"
            appearance="subtle"
            icon={<MoreIcon />}
            />
            </MenuTrigger>
            <MenuPopover>
            <MenuList>
              <MenuItem icon={<GlassesOffRegular />}>Mark as read</MenuItem>
              <MenuItem icon={group === "pinned" ? <PinOffRegular /> : <PinRegular />}>
              {group === "pinned" ? "Unpin" : "Pin"}
              </MenuItem>
              <MenuItem icon={<AlertOffRegular />}>Mute</MenuItem>
              {group === "recent" &&
              <MenuItem icon={<EyeOffRegular />}>Hide</MenuItem>
              }
              <MenuItem icon={<ProhibitedRegular />}>Block</MenuItem>
              <MenuDivider />
              <MenuItem icon={<DeleteRegular />}>Delete chat</MenuItem>
            </MenuList>
            </MenuPopover>
          </Menu>  
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </TreeItem>
  );
};
