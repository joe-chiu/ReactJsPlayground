import { useState } from "react";

import { 
  Avatar,
  Button, 
  Card, 
  CardFooter, 
  CardHeader, 
  CardPreview, 
  Divider, 
  Menu, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  MenuPopover, 
  MenuTrigger, 
  Toolbar, 
  ToolbarButton, 
  ToolbarDivider, 
  makeStyles, 
  shorthands 
} from "@fluentui/react-components";

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

import { TeamsAvatar } from "./TeamsAvatar";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "1536px",
    minHeight: 0,
    marginBottom: "16px",
  },
});

const MessageMenu = () => {
  return (
    <Toolbar aria-label="Default">
      <ToolbarButton icon="&#128077;" />
      <ToolbarButton icon="&#10084;&#65039;" />
      <ToolbarButton icon="&#128518;" />
      <ToolbarButton icon="&#128558;" />
      <ToolbarButton aria-label="more reactions" icon={<EmojiAddIcon />} />
      <ToolbarDivider />
      <Menu>
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
  );
};

const Post = () => {
  const styles = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Card className={styles.card} 
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <CardHeader
        header={
          <div className="flex flex-row items-center w-full">
            <TeamsAvatar />
            <div className="pl-2">Patti Fernandez</div>
            <div className="pl-2 text-xs text-slate-500">6/26 6:04 AM</div>
            <div className="grow"></div>
            <div className="flex-none h-8">
              {showMenu &&
              <MessageMenu />
              }
            </div>
          </div>
        }
      />
      <CardPreview>
        <p className="px-4">
          Hi team! This site is the best place to collaborate on all things Mark 8. 
          Please use this team site for doc repository, meeting notes, project discussions, 
          and any team meetings. Welcome everyone!
        </p>
      </CardPreview>
      <CardFooter>
        <div className="flex flex-col w-full">
          <Divider className="h-6" />
          <div>
            <Avatar size={24} badge={{status: "available"}} />
            <Button style={{minWidth: 0}} appearance="transparent">Reply</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export const TeamMessagePane = () => {

  return (
    <div id="messagePane" className="grow flex flex-col">
      { /* the h-52 somehow works like min-height and is crucial to make the layout work */ }
      <div id="teamPostsArea" className="grow h-52 overflow-y-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
