import { useState } from "react";

import {
  Button, 
  Menu, 
  MenuItem, 
  MenuList, 
  MenuPopover, 
  MenuTrigger, 
  TreeItem,
  TreeItemPersonaLayout,
  makeStyles,
} from "@fluentui/react-components";

import {
  bundleIcon,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  GlassesOffRegular,
  GlassesOffFilled,
  MentionRegular,
} from "@fluentui/react-icons";

const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const GlassesOffIcon = bundleIcon(GlassesOffFilled, GlassesOffRegular);

import { TeamsAvatar } from "./TeamsAvatar";

const useCustomStyles = makeStyles({
  root: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  main: {
    paddingTop: "4px",
    marginLeft: "5px",
  },
  description: {
    paddingBottom: "4px",
    marginLeft: "5px",
  }
});

const FeedPopoverMenu = () => {
  return (
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
          <MenuItem icon={<GlassesOffIcon />}>Mark as read</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>  
  );
};

export interface ActivityItemProps {
  type?: "chatMention" | "channelMention", 
  imageUrl?: string,
  reason?: string,
  preview?: string,
  topic?: string,
  timestamp?: string
  unread? : boolean,
}

export const ActivityItem = (props: ActivityItemProps) => {
  const customStyle = useCustomStyles();
  const [hover, setHover] = useState(false);
  
  return (
    <TreeItem value={JSON.stringify(props)} itemType="leaf">
      <TreeItemPersonaLayout
        className={customStyle.root}
        main={{
          className: customStyle.main,
          children:
            <div className={`flex flex-row items-baseline ${props.unread && "font-bold"}`}>
              <div className="flex flex-col">
                <p className="">{props.reason}</p>
                <p className="text-sm line-clamp-1">{props.preview}</p>
              </div>
              {!hover &&
              <p className="text-xs text-slate-700">{props.timestamp}</p>
              }
            </div>					
        }}
        media={
          <TeamsAvatar 
            imageUrl={props.imageUrl} 
            badge={{icon: 
              <MentionRegular 
                fontSize={16} color="red" />
            }}
          />
        }
        description={{
          className: customStyle.description,
          children:
            <p className={`line-clamp-1 text-xs text-slate-700 ${props.unread && "font-bold"}`}>{props.topic}</p>
        }}
        actions={
          <FeedPopoverMenu />
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </TreeItem>
  );
};
