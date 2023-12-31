import { useState } from "react";

import { 
  Input, 
  Button,
} from "@fluentui/react-components";

import {
  bundleIcon,
  SearchRegular,
  SearchFilled,
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

import { UserMenu } from "./UserMenu";
import { AppMenu } from "./AppMenu";

const SearchIcon = bundleIcon(SearchFilled, SearchRegular);
const LeftArrowIcon = bundleIcon(ChevronLeftFilled, ChevronLeftRegular);
const RightArrowIcon = bundleIcon(ChevronRightFilled, ChevronRightRegular);
const DismissIcon = bundleIcon(DismissFilled, DismissRegular);
const MaximizeIcon = bundleIcon(MaximizeFilled, MaximizeRegular);
const MinimizeIcon = bundleIcon(SubtractFilled, SubtractRegular);

export const TopBar = () => {
  const [searchPlaceholderText, setSearchPlaceholderText] = useState("Search");

  return (
    <div className="h-10 flex flex-row items-center bg-blue-200 border-b-2 border-indigo-200" >
      <div className="flex flex-row w-52 justify-start"></div>
      <div className="grow flex place-content-center">
        <Button appearance="transparent" icon={<LeftArrowIcon />} />
        <Button appearance="transparent" icon={<RightArrowIcon />} />
        <Input className="w-2/5" size="medium" placeholder={searchPlaceholderText} contentBefore={<SearchIcon />}
              onFocus={() => setSearchPlaceholderText("Search for people, chats and communities")} 
              onBlur={() => setSearchPlaceholderText("Search")} />
      </div>
      <div className="flex flex-row w-52 justify-end">
        <AppMenu />
        <UserMenu />
        <Button appearance="transparent" icon={<MinimizeIcon />} />
        <Button appearance="transparent" icon={<MaximizeIcon />} />
        <Button appearance="transparent" icon={<DismissIcon />} />
      </div>
    </div>
  );
};
