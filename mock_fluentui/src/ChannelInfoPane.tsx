import {
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Button,
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
      <div className="grow flex flex-col items-start">
        <p className="font-bold p-2">Options</p>
        <Button size="small" appearance="transparent" icon={<AlertIcon />}>Mute</Button>
        <Button size="small" appearance="transparent" icon={<LinkIcon />}>Copy link to chat</Button>
        <Button size="small" appearance="transparent" icon={<AppsIcon />}>Manage apps</Button>
        <Button size="small" appearance="transparent" icon={<LeaveIcon />}>Leave</Button>
      </div>
    </div>
  );
};
