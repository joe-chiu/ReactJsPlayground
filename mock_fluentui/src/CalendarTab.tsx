import {
  Button,
  Link,
  Menu,
  MenuItemCheckbox,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";

import { Calendar } from "@fluentui/react-calendar-compat";

import {
  CalendarFilled,
  NumberSymbolRegular,
  AddRegular,
  CalendarTodayRegular,
  ChevronLeftRegular,
  ChevronRightRegular,
  ChevronDownRegular,
  CalendarWorkWeekRegular,
  CalendarDayRegular,
  Calendar3DayRegular,
} from "@fluentui/react-icons";

export const CalendarTab = () => {
  const amHours = [7, 8, 9, 10, 11];
  const pmHours = [12, 1, 2, 3, 4, 5, 6];
  const days = ["Monday", "Tuesday", "Wdnesday", "Thursday", "Friday"];

  return (
    <div className="flex flex-col w-full h-full bg-indigo-50">
      <div className="h-40 flex flex-col border-b border-slate-400">
        <div className="flex flex-row items-center">
          <div className="bg-blue-200 p-1 m-4 h-8 w-8 rounded-md">
            <CalendarFilled color="white" fontSize={24} />
          </div>
          <div className="text-lg font-bold mr-10">
            Calendar
          </div>
          <Link>Add Google Calendar</Link>
          <div className="grow"></div>
          <div className="mr-2"><Button appearance="secondary" icon={<NumberSymbolRegular />}>Join with an ID</Button></div>
          <div className="mr-8"><Button appearance="primary" icon={<AddRegular />}>New meeting</Button></div>
        </div>
        <div className="flex flex-row items-center">
          <div className="mx-4"><Button icon={<CalendarTodayRegular />} appearance="transparent">Today</Button></div>
          <div><Button icon={<ChevronLeftRegular />} appearance="transparent" /></div>
          <div><Button icon={<ChevronRightRegular />} appearance="transparent" /></div>
          <div>
            <Popover>
              <PopoverTrigger disableButtonEnhancement>
                <Button appearance="transparent"
                  icon={<ChevronDownRegular />} iconPosition={"after"}>
                  <span className="font-bold">November 2023</span>
                </Button>
              </PopoverTrigger>

              <PopoverSurface>
              <Calendar 
                dateRangeType={3}
                isMonthPickerVisible={false} 
                showGoToToday={false}
              />
              </PopoverSurface>
            </Popover>            
          </div>
          <div className="grow"></div>
          <div className="mx-8">
            <Menu checkedValues={{weekType: ["wweek"]}}>
              <MenuTrigger  disableButtonEnhancement>
                <Button appearance="transparent"
                  icon={<ChevronDownRegular />} iconPosition={"after"}>
                  Work week
                </Button>
              </MenuTrigger >

              <MenuPopover>
                <MenuList>
                  <MenuItemCheckbox icon={<CalendarDayRegular />} 
                    name="weekType" value="day">
                    Day
                  </MenuItemCheckbox>
                  <MenuItemCheckbox icon={<CalendarWorkWeekRegular />} 
                    name="weekType" value="wweek">
                    Work week
                  </MenuItemCheckbox>
                  <MenuItemCheckbox icon={<Calendar3DayRegular />} 
                    name="weekType" value="week">
                    Week
                  </MenuItemCheckbox>
                </MenuList>
              </MenuPopover>
            </Menu>            
          </div>
        </div>
      </div>
      <div className="flex flex-row border-b border-slate-400 pr-[15.33px]">
        <div className="flex-none w-12 h-16"></div>
        <div className="flex-1 border-l border-slate-600">
          <div className="text-2xl mx-2 mt-1 text-slate-600">13</div>
          <div className="mx-2 text-slate-400">Monday</div>
        </div>
        <div className="flex-1 border-l border-slate-600">
        <div className="text-2xl mx-2 mt-1 text-slate-600">14</div>
          <div className="mx-2 text-slate-400">Tuesday</div>
        </div>
        <div className="flex-1 border-l border-slate-600">
        <div className="text-2xl mx-2 mt-1 text-slate-600">15</div>
          <div className="mx-2 text-slate-400">Wednesday</div>
        </div>
        <div className="flex-1 border-l border-slate-600">
        <div className="text-2xl mx-2 mt-1 text-slate-600">16</div>
          <div className="mx-2 text-slate-400">Thursday</div>
        </div>
        <div className="flex-1 border-l border-r-0 border-slate-600">
        <div className="text-2xl mx-2 mt-1 text-slate-600">17</div>
          <div className="mx-2 text-slate-400">Friday</div>
        </div>
      </div>
      <div className="grow flex flex-col overflow-y-auto">
        {amHours.map(hour => (
        <div key={hour + "AR"} className="flex flex-row">
          <div key={hour + "A"} className="w-12 h-20 text-sm text-center text-slate-500">{hour} AM</div>
          {days.map(day => (
          <div key={hour + "A" + day} className="grow border-l border-b border-slate-400"></div>
          ))}
          </div>
        ))}
        {pmHours.map(hour => (
        <div key={hour + "PR"} className="flex flex-row">
          <div key={hour + "P"} className="w-12 h-20 text-sm text-center text-slate-500">{hour} PM</div>
          {days.map(day => (
          <div key={hour + "A" + day} className="grow border-l border-b border-slate-400"></div>
          ))}
        </div>
        ))}
      </div>
    </div>
  );
};
  