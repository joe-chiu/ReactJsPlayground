import {
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tree, 
  TreeItem, 
  TreeItemLayout,
  makeStyles,
} from "@fluentui/react-components";

import {
  bundleIcon,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  AddRegular,
  AddFilled,
  FilterRegular,
  FilterFilled,
  PinOffRegular,
  PinRegular,
  AlertRegular,
  AlertFilled,
  SettingsRegular,
  SettingsFilled,
  MailRegular,
  MailFilled,
  LinkRegular,
  LinkFilled,
  ConnectorRegular,
  ConnectorFilled
} from "@fluentui/react-icons";

const AddIcon = bundleIcon(AddFilled, AddRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const FilterIcon = bundleIcon(FilterFilled, FilterRegular);
const AlertIcon = bundleIcon(AlertFilled, AlertRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);
const MailIcon = bundleIcon(MailFilled, MailRegular);
const LinkIcon = bundleIcon(LinkFilled, LinkRegular);
const ConnectorIcon = bundleIcon(ConnectorFilled, ConnectorRegular);

const usePinndcItemStyles = makeStyles({
  root: {
    paddingLeft: "16px",
    paddingRight: "5px",
  },
});

const useTeamItemStyles = makeStyles({
  root: {
    paddingLeft: "0px",
    paddingRight: "5px",
  },
  expandIcon: {
    minWidth: "16px",
  }
});

const useChannelItemStyles = makeStyles({
  root: {
    paddingLeft: "64px",
    paddingRight: "5px",
  },
});

const PinnedChannelTreeItem = (
  {teamName = "Team name", channelName = "Channel name"}
) => {
  const pinnedItemStyle = usePinndcItemStyles();
  return (
    <div>
      <TreeItem itemType="leaf">
        <TreeItemLayout 
          className={pinnedItemStyle.root}
          actions={ <TeamListPopoverMenu group="pinned" /> }
        >
          <div className="flex flex-row items-center">
            <div className="flex-none w-8 h-8 mx-2 my-1 rounded-md bg-green-800"></div>
            <div className="flex-grow flex flex-col">
              <div>{channelName}</div>
              <div className="text-sm text-slate-600">{teamName}</div>
            </div>
          </div>
        </TreeItemLayout>
      </TreeItem>
    </div>
  );
}

const ChannelTreeItem = () => {
  return (
    <div></div>
  );
};

const TeamTreeItem = () => {
  return (
    <div></div>
  );
};

const TeamListPopoverMenu = ({group = "pinned"}) => {
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
        <MenuItem icon={<AlertIcon />}>Channel notifications</MenuItem>
        <MenuItem icon={group === "pinned" ? <PinOffRegular /> : <PinRegular />}>
          {group === "pinned" ? "Unpin" : "Pin"}
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<SettingsIcon />}>Manage channel</MenuItem>
        <MenuItem icon={<MailIcon />}>Get email address</MenuItem>
        <MenuItem icon={<LinkIcon />}>Get link to channel</MenuItem>
        <MenuItem icon={<ConnectorIcon />}>Connectors</MenuItem>
      </MenuList>
      </MenuPopover>
    </Menu>  
  );
};

export const ChannelList = () => {
  const teamItemStyle = useTeamItemStyles();
  const channelItemStype = useChannelItemStyles();

  return (
    <div className="flex flex-col w-80 bg-blue-100 shadow-lg">
      <div id="chatListHeader" className="flex-none h-14 flex flex-row items-center gap-2 p-3">
        <p className="grow w-52 text-lg font-bold">Teams</p>
        <Button size="medium" appearance="transparent" className="h-8" icon={<MoreIcon />} />
        <Button size="medium" appearance="transparent" className="h-8" icon={<FilterIcon />} />
        <Button size="medium" appearance="transparent" className="h-8" icon={<AddIcon />} />
      </div>
      <div className="grow overflow-y-auto pb-10">
        <Tree aria-label="chat list" defaultOpenItems={["pinned", "teams", "team-1"]}>
          <TreeItem itemType="branch" value="pinned">
            <TreeItemLayout><p className="text-sm">Pinned</p></TreeItemLayout>
            <Tree>
              <PinnedChannelTreeItem />
              <PinnedChannelTreeItem />
              <PinnedChannelTreeItem />
            </Tree>
          </TreeItem>
          <TreeItem itemType="branch" value="teams">
            <TreeItemLayout><p className="text-sm">Your teams</p></TreeItemLayout>
            <Tree>
              <TreeItem itemType="branch" value="team-1">
                <TreeItemLayout 
                  className={teamItemStyle.root}
                  expandIcon={{
                    className: teamItemStyle.expandIcon                    
                  }}
                >
                  <div className="flex flex-row items-center">
                    <div className="flex-none w-8 h-8 mx-2 my-1 rounded-md bg-green-800"></div>
                    <div className="flex-grow flex flex-col">
                      <div>Team name</div>
                    </div>
                  </div>
                </TreeItemLayout>
                <Tree>
                  <TreeItem itemType="leaf">
                    <TreeItemLayout className={channelItemStype.root}>
                      <div>Channel 1</div>
                    </TreeItemLayout>
                  </TreeItem>
                  <TreeItem itemType="leaf">
                    <TreeItemLayout className={channelItemStype.root}>
                      <div>Channel 2</div>
                    </TreeItemLayout>
                  </TreeItem>
                  <TreeItem itemType="leaf">
                    <TreeItemLayout className={channelItemStype.root}>
                      <div>Channel 3</div>
                    </TreeItemLayout>
                  </TreeItem>
                </Tree>
              </TreeItem>
            </Tree>
          </TreeItem>
        </Tree>        
      </div>
    </div>
  );
};
