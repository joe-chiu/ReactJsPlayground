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
  const firstDayOfWeek = 13;
  const monthYear = "November 2023";

  return (
    <div className="flex flex-col w-full h-full bg-indigo-50">
      <div className="flex-none h-28 flex flex-col border-b border-slate-400">
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
        <div className="flex flex-row mt-3 items-center">
          <div className="mx-4"><Button icon={<CalendarTodayRegular />} appearance="transparent">Today</Button></div>
          <div><Button icon={<ChevronLeftRegular />} appearance="transparent" /></div>
          <div><Button icon={<ChevronRightRegular />} appearance="transparent" /></div>
          <div>
            <Popover>
              <PopoverTrigger disableButtonEnhancement>
                <Button appearance="transparent"
                  icon={<ChevronDownRegular />} iconPosition={"after"}>
                  <span className="font-bold">{monthYear}</span>
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
      <div style={{scrollbarGutter: "stable", overflow: "hidden"}} 
        className="flex-none flex flex-row border-b border-slate-400">
        <div className="flex-none w-12 h-16"></div>
        { days.map((day, i) => (
        <div className="flex-1 border-l border-slate-400">
          <div className="text-2xl mx-2 mt-1 text-slate-600">{firstDayOfWeek + i}</div>
          <div className="mx-2 text-small text-slate-600">{day}</div>
        </div>
        ))}
      </div>
      <div className="grow flex flex-col overflow-y-auto">
        {amHours.map(hour => (
        <div key={hour + "AR"} className="flex flex-row">
          <div key={hour + "A"} className="w-12 h-20 text-xs text-center text-slate-500">{hour} AM</div>
          {days.map(day => (
          <div key={hour + "A" + day} className="grow border-l border-b border-slate-400"></div>
          ))}
          </div>
        ))}
        {pmHours.map(hour => (
        <div key={hour + "PR"} className="flex flex-row">
          <div key={hour + "P"} className="w-12 h-20 text-xs text-center text-slate-500">{hour} PM</div>
          {days.map(day => (
          <div key={hour + "A" + day} className="grow border-l border-b border-slate-400"></div>
          ))}
        </div>
        ))}
      </div>
    </div>
  );
};
  