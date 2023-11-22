import { useState } from "react";

import {
    Tab,
    TabList,
    CounterBadge,
    Button,
  } from "@fluentui/react-components";
  
  import { 
    bundleIcon, 
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

export interface TeamsLeftNavProps {
  onAppSelect?: (app: string) => void;
}

export const LeftNav = (props: TeamsLeftNavProps) => {
  const [hoverActivity, setHoverActivity] = useState(false);
  const [hoverChat, setHoverChat] = useState(false);
  const [hoverChannel, setHoverChannel] = useState(false);
  const [hoverCalendar, setHoverCalendar] = useState(false);
  const [hoverFile, setHoverFile] = useState(false);
  const [activeTab, setActiveTab] = useState("Chat");

  return (
    <div className="flex flex-col w-16 bg-blue-200 drop-shadow-xl">
      <div className="grow flex flex-col">
        <div className="">
          <TabList vertical size="medium" defaultSelectedValue="Chat" 
            onTabSelect={(e, data) => {
              props.onAppSelect && props.onAppSelect(data.value as string);
              setActiveTab(data.value as string);
            }}>
            <Tab value="Activity"
              style={hoverActivity ? {backgroundColor: "rgb(219 234 254)"} : undefined}
              onMouseEnter={() => setHoverActivity(true)} 
              onMouseLeave={() => setHoverActivity(false)}>
              <div className="w-10 h-12 pt-1">
                <AlertIcon className="w-6 h-6"
                  filled={hoverActivity || activeTab === "Activity"} />
                <p className="text-2xs">Activity</p>
              </div>
            </Tab>
            <Tab value="Chat"
              style={hoverChat ? {backgroundColor: "rgb(219 234 254)"} : undefined}
              onMouseEnter={() => setHoverChat(true)} 
              onMouseLeave={() => setHoverChat(false)}>
              <div className="w-10 h-12 pt-1">
                <ChatIcon className="w-6 h-6"  
                  filled={hoverChat || activeTab === "Chat"} />
                <div className="absolute top-2 right-3">
                  <CounterBadge as="div" size="small" appearance="filled" color="danger" count={5} />
                </div>
                <p className="text-2xs">Chat</p>
              </div>
            </Tab>
            <Tab value="Teams"
              style={hoverChannel ? {backgroundColor: "rgb(219 234 254)"} : undefined}
              className="bg-blue-100"
              onMouseEnter={() => setHoverChannel(true)} 
              onMouseLeave={() => setHoverChannel(false)}>
              <div className="w-10 h-12 pt-1">
                <TeamsIcon className="w-6 h-6" 
                  filled={hoverChannel || activeTab === "Teams"} />
                <p className="text-2xs">Teams</p>
              </div>
            </Tab>
            <Tab value="Calendar"
              style={hoverCalendar ? {backgroundColor: "rgb(219 234 254)"} : undefined}
              onMouseEnter={() => setHoverCalendar(true)} 
              onMouseLeave={() => setHoverCalendar(false)}>
              <div className="w-10 h-12 pt-1">
                <CalendarIcon className="w-6 h-6" 
                  filled={hoverCalendar || activeTab === "Calendar"} />
                <p className="text-2xs">Calendar</p>
              </div>
            </Tab>
            <Tab value="Files"
              style={hoverFile ? {backgroundColor: "rgb(219 234 254)"} : undefined}
              onMouseEnter={() => setHoverFile(true)} 
              onMouseLeave={() => setHoverFile(false)}>
              <div className="w-10 h-12 pt-1">
                <DocumentIcon className="w-6 h-6" 
                  filled={hoverFile || activeTab === "Files"} />
                <p className="text-2xs">Files</p>
              </div>
            </Tab>
          </TabList>
        </div>
        <div className="flex place-content-center p-2">
          <Button appearance="transparent" icon={<MoreIcon />} />
        </div>
      </div>
      <div className="flex flex-col items-center p-2">
        <Button size="medium" appearance="transparent">
          <div className="flex flex-col">
            <SlideGridIcon className="w-6 h-6" />
            <div className="text-2xs">Store</div>
          </div>
        </Button>
      </div>
    </div>
  );
};
