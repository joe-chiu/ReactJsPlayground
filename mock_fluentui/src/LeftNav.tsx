import React from "react";

import {
    Tab,
    TabList,
    TabListProps,
    CounterBadge,
    Button,
  } from "@fluentui/react-components";
  
  import { 
    bundleIcon, 
    iconFilledClassName, 
    iconRegularClassName, 
    AlertRegular, 
    AlertFilled,
    ChatRegular,
    ChatFilled,
    PeopleTeamRegular,
    PeopleTeamFilled,
    CalendarFilled,
    CalendarRegular,
    DocumentFilled,
    DocumentRegular,
    MoreHorizontalFilled,
    MoreHorizontalRegular,
    SlideGridFilled,
    SlideGridRegular,
  } from "@fluentui/react-icons";
  
const AlertIcon = bundleIcon(AlertFilled, AlertRegular);
const ChatIcon = bundleIcon(ChatFilled, ChatRegular);
const TeamsIcon = bundleIcon(PeopleTeamFilled, PeopleTeamRegular);
const CalendarIcon = bundleIcon(CalendarFilled, CalendarRegular);
const DocumentIcon = bundleIcon(DocumentFilled, DocumentRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const SlideGridIcon = bundleIcon(SlideGridFilled, SlideGridRegular);

const LeftNav = (props: Partial<TabListProps>) => {
  return (
    <div className="flex-col flex w-14 h-full bg-blue-200">
      <div className="flex-grow flex flex-col">
        <div className="w-14">
          <TabList {...props} vertical size="medium" defaultSelectedValue="tab2" >
            <Tab value="tab1">
              <div className="w-8">
                <AlertIcon className="w-4 h-4" />
                <p className="text-2xs">Activity</p>
              </div>
            </Tab>
            <Tab value="tab2">
              <div className="w-8">
                <ChatIcon className="w-5 h-5" />
                <div className="absolute top-2 right-3">
                  <CounterBadge as="div" size="extra-small" appearance="filled" color="danger" count={5} />
                </div>
                <p className="text-2xs">Chat</p>
              </div>
            </Tab>
            <Tab value="tab3">
              <div className="w-8">
                <TeamsIcon className="w-5 h-5" />
                <p className="text-2xs">Teams</p>
              </div>
            </Tab>
            <Tab value="tab4">
              <div className="w-8">
                <CalendarIcon className="w-5 h-5" />
                <p className="text-2xs">Calendar</p>
              </div>
            </Tab>
            <Tab value="tab5">
              <div className="w-8">
                <DocumentIcon className="w-5 h-5" />
                <p className="text-2xs">Files</p>
              </div>
            </Tab>
          </TabList>
        </div>
        <div className="flex place-content-center p-2">
          <Button appearance="subtle" icon={<MoreIcon />} />
        </div>
      </div>
      <div className="flex flex-col items-center p-2">
        <Button size="small" appearance="subtle" icon={<SlideGridIcon />} />
        <div className="text-2xs">Store</div>
      </div>
    </div>
  );
};

export default LeftNav;