import { useEffect, useState } from "react";

import {
  Tab,
  TabList,
  Button,
  Menu,
  MenuTrigger,
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

export const TeamHeader = ({showOpenIcon = false, ...props} : TeamHeaderProps) => {
  const [infoPaneState, setInfoPaneState] = useState(showOpenIcon);
  useEffect(() => {
    setInfoPaneState(showOpenIcon);
  }, [showOpenIcon])

  return (
    <div className="h-14 flex flex-row items-center pl-4 pr-4 border-b-2 border-blue-100">
      <div className="">
      <div className="flex flex-row items-center">
        <div className="flex-none w-8 h-8 mx-2 my-1 rounded-md bg-green-800"></div>
          <div className="flex-grow flex flex-col">
            <div className="text-md font-bold">General</div>
          </div>
        </div>
      </div>
      <div>
        <TabList defaultSelectedValue="Posts" 
          onTabSelect={(e, data) => props.onTabSelect && props.onTabSelect(data.value as string)} >
          <Tab value="Posts">
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
