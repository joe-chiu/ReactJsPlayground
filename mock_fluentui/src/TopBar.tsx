import React from "react";

import { 
  Input, 
  Button,
  Avatar,
} from "@fluentui/react-components";

import {
  bundleIcon,
  SearchRegular,
  SearchFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  DismissRegular,
  DismissFilled,
  MaximizeRegular,
  MaximizeFilled,
  ChevronLeftRegular,
  ChevronLeftFilled,
  ChevronRightRegular,
  ChevronRightFilled,
  SubtractRegular,
  SubtractFilled,
} from "@fluentui/react-icons";

const SearchIcon = bundleIcon(SearchFilled, SearchRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const LeftArrowIcon = bundleIcon(ChevronLeftFilled, ChevronLeftRegular);
const RightArrowIcon = bundleIcon(ChevronRightFilled, ChevronRightRegular);
const DismissIcon = bundleIcon(DismissFilled, DismissRegular);
const MaximizeIcon = bundleIcon(MaximizeFilled, MaximizeRegular);
const MinimizeIcon = bundleIcon(SubtractFilled, SubtractRegular);

const TopBar = () => {
  return (
    <div className="h-10 flex flex-row items-center bg-blue-200 border-b-2 border-indigo-200" >
      <div className="border border-black">
        <div className="w-14 text-center bg-blue-300">
          Logo
        </div>
      </div>
      <div className="flex-grow flex place-content-center">
        <Button appearance="subtle" icon={<LeftArrowIcon />} />
        <Button appearance="subtle" icon={<RightArrowIcon />} />
        <Input className="w-80" size="medium" placeholder="Search" contentBefore={<SearchIcon />} />
      </div>
      <div className="flex">
        <Button appearance="subtle" icon={<MoreIcon />} />
        <Avatar
          name="Katri Athokas"
          badge={{status: "available"}}
          image={{
            src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
          }} 
        />
        <Button appearance="subtle" icon={<MinimizeIcon />} />
        <Button appearance="subtle" icon={<MaximizeIcon />} />
        <Button appearance="subtle" icon={<DismissIcon />} />
      </div>
    </div>
  );
};

export default TopBar;