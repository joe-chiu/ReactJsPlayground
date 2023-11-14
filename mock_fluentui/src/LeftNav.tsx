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
  return (
    <div className="flex flex-col w-16 h-full bg-blue-200">
      <div className="flex-grow flex flex-col">
        <div className="">
          <TabList vertical size="medium" defaultSelectedValue="Chat" 
            onTabSelect={(e, data) => props.onAppSelect && props.onAppSelect(data.value as string)}>
            <Tab value="Activity">
              <div className="w-10 h-12 pt-1">
                <AlertIcon className="w-6 h-6" />
                <p className="text-2xs">Activity</p>
              </div>
            </Tab>
            <Tab value="Chat">
              <div className="w-10 h-12 pt-1">
                <ChatIcon className="w-6 h-6" filled />
                <div className="absolute top-2 right-3">
                  <CounterBadge as="div" size="small" appearance="filled" color="danger" count={5} />
                </div>
                <p className="text-2xs">Chat</p>
              </div>
            </Tab>
            <Tab value="Teams">
              <div className="w-10 h-12 pt-1">
                <TeamsIcon className="w-6 h-6" />
                <p className="text-2xs">Teams</p>
              </div>
            </Tab>
            <Tab value="Calendar">
              <div className="w-10 h-12 pt-1">
                <CalendarIcon className="w-6 h-6" />
                <p className="text-2xs">Calendar</p>
              </div>
            </Tab>
            <Tab value="Files">
              <div className="w-10 h-12 pt-1">
                <DocumentIcon className="w-6 h-6" />
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
