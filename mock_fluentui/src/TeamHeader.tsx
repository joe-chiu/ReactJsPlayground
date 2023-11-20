import { useEffect, useState } from "react";

import {
  Avatar,
  Tab,
  TabList,
  Button,
  Menu,
  MenuTrigger,
  MenuButtonProps,
  SplitButton,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";

import {
  bundleIcon,
  AddRegular,
  AddFilled,
  VideoRegular,
  VideoFilled,
  MeetNowRegular,
  MeetNowFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  PanelRightContractRegular,
  PanelRightContractFilled,
  PanelRightExpandRegular,
  PanelRightExpandFilled,
  CalendarAddRegular,
  CalendarAddFilled
} from "@fluentui/react-icons";

const AddIcon = bundleIcon(AddFilled, AddRegular);
const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const PaneCloseIcon = bundleIcon(PanelRightContractFilled, PanelRightContractRegular);
const PaneOpenIcon = bundleIcon(PanelRightExpandFilled, PanelRightExpandRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const MeetNowIcon = bundleIcon(MeetNowFilled, MeetNowRegular);
const CalendarAddIcon = bundleIcon(CalendarAddFilled, CalendarAddRegular);

export interface TeamHeaderProps {
  showOpenIcon?: boolean,
  onTabSelect?: (tab: string) => void,
  onInfoPaneToggle?: (infoPaneShown: boolean) => void,
}

const SplitVideoCallButton = () => {
  return (
    <Menu positioning="below-end">
      <MenuTrigger disableButtonEnhancement>
        <SplitButton icon={<VideoIcon />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<MeetNowIcon />}>Meet now</MenuItem>
          <MenuItem icon={<CalendarAddIcon />}>Schedule a meeting</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  ); 
};

export const TeamHeader = ({showOpenIcon = true, ...props} : TeamHeaderProps) => {
  const [infoPaneState, setInfoPaneState] = useState(showOpenIcon);
  useEffect(() => {
    setInfoPaneState(showOpenIcon);
  }, [showOpenIcon])

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
      <div>
        <TabList defaultSelectedValue="Chat" 
          onTabSelect={(e, data) => props.onTabSelect && props.onTabSelect(data.value as string)} >
          <Tab value="Chat">
            <p className="">Posts</p>
          </Tab>
          <Tab value="Files">
            <p className="">Files</p>
          </Tab>
        </TabList>
      </div>
      <Button appearance="transparent" icon={<AddIcon />} />
      <div className="grow"></div>
      <div className="flex flex-row">
        <Button appearance="transparent" size="medium" icon={<MoreIcon />} />
        <SplitVideoCallButton />
        <div className="w-2"></div>
        <Button size="medium" icon={infoPaneState ? <PaneCloseIcon /> : <PaneOpenIcon />} 
          onClick={(e) => { 
            setInfoPaneState(!infoPaneState);
            props.onInfoPaneToggle && props.onInfoPaneToggle(!infoPaneState);
          }} />
      </div>
    </div>
  );
};
