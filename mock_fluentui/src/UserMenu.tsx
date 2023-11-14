import {
  Avatar,
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuDivider,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

import {
  bundleIcon,
  ContactCardRegular,
  ContactCardFilled,
  PresenceAvailableFilled,
  PresenceDndFilled,
  PresenceBusyFilled,
  PresenceOfflineRegular,
  ArrowClockwiseRegular,
  PresenceAwayFilled,
} from "@fluentui/react-icons";

const ContactCardIcon = bundleIcon(ContactCardFilled, ContactCardRegular);
 
export const UserMenu = () => {
  return (
    <Menu positioning={"below"}>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance="transparent" size="small">
          <Avatar
            badge={{status: "available"}}
            image={{
              src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
            }} 
          />
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>
            <div className="flex flex-row">
              <Avatar
                size={48}
                badge={{status: "available"}}
                image={{
                  src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                }} 
              />
              <div className="flex-grow flex flex-col pl-2">
                <div className="text-xs font-bold">Taylor Swift</div>
                <div className="text-2xs text-slate-500">taylor@gmail.com</div>
                <div className="flex flex-row">

                  <Menu>
                    <MenuTrigger disableButtonEnhancement>
                      <p className="text-2xs pt-1 hover:text-indigo-400">Available</p>
                    </MenuTrigger>
                    <MenuPopover>
                      <MenuList>
                        <MenuItem icon={<PresenceAvailableFilled color="green" fontSize={12} />}>Available</MenuItem>
                        <MenuItem icon={<PresenceBusyFilled color="red" fontSize={12} />}>Busy</MenuItem>
                        <MenuItem icon={<PresenceDndFilled color="red" fontSize={12} />}>Do not disturb</MenuItem>
                        <MenuItem icon={<PresenceAwayFilled color="orange" fontSize={12} />}>Be right back</MenuItem>
                        <MenuItem icon={<PresenceAwayFilled color="orange" fontSize={12} />}>Appear away</MenuItem>
                        <MenuItem icon={<PresenceOfflineRegular fontSize={12} />}>Appear offline</MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<ArrowClockwiseRegular />}>Reset status</MenuItem>
                      </MenuList>
                    </MenuPopover>
                  </Menu>

                </div>
              </div>
            </div>
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<ContactCardIcon />}>Manage account</MenuItem>
          <MenuDivider />
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
