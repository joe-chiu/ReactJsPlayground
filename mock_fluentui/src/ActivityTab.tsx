import { Button, Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import {
  bundleIcon,
  FilterRegular,
  FilterFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
} from "@fluentui/react-icons";

import { ActivityItem } from "./ActivityItem";
import { ChatPane } from "./ChatPane";

const FilterIcon = bundleIcon(FilterFilled, FilterRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

export const ActivityTab = () => {
  return (
    <div id="feedTab" className="grow flex flex-row bg-indigo-50">
      <div id="feedList" className="flex-none w-80 flex flex-col shadow-lg">
        <div id="feedHeader" className="flex-none h-14 flex flex-row items-center gap-2 p-3">
          <p className="grow w-52 text-lg font-bold">Feed</p>
          <Button size="medium" appearance="transparent" className="h-8" icon={<FilterIcon />} />
          <Button size="medium" appearance="transparent" className="h-8" icon={<MoreIcon />} />
        </div>
        <div id="feedListContent" className="grow">
          <Tree>
            <ActivityItem />
            <ActivityItem />
            <ActivityItem />
          </Tree>
        </div>
      </div>
      <div id="feedPane" className="grow flex flex-col min-h-0">
        <ChatPane />
      </div>
    </div>
  );
};
