import {
  Button,
  Divider,
  Tree,
  TreeItem,
  TreeItemLayout,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";

import {
  bundleIcon,
  AlertRegular, 
  AlertFilled,
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
import { ChatListItem } from "./ChatListItem";

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

export interface InfoPaneProps {
  onInfoPaneClose?: () => void,
}

export const ChannelInfoPane = (props: InfoPaneProps) => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <div className="w-60 flex flex-col border-l-2 border-blue-100">
      <div className="ml-auto">
        <Button 
          size="small" appearance="transparent" icon={<DismissIcon 
          onClick={() => props.onInfoPaneClose && props.onInfoPaneClose()}
        />} />
      </div>
      <div className="text-md pl-2 pr-2 font-bold">In this channel</div>
      <Divider className="max-h-6" />
      <Tree aria-label="channel info" defaultOpenItems={["people", "description", "options", "updates"]}>
        <TreeItem itemType="branch" value="people">
          <TreeItemLayout><p className="text-sm">People (15)</p></TreeItemLayout>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>
                <div>AvatarGroup</div>
              </TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem itemType="branch" value="description">
        <TreeItemLayout><p className="text-sm">Description</p></TreeItemLayout>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>
                <div>Channel description this and that</div>
              </TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem itemType="branch" value="options">
        <TreeItemLayout><p className="text-sm">Options</p></TreeItemLayout>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>
                <div>List of options</div>
              </TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem itemType="branch" value="updates">
        <TreeItemLayout><p className="text-sm">Updates</p></TreeItemLayout>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>
                <div>List of control messages</div>
              </TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
      </Tree>        
    </div>
  );
};
