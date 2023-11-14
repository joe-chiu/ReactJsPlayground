import React from "react";

import { 
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
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  SettingsRegular,
  SettingsFilled,
  PremiumRegular,
  PremiumFilled,
} from "@fluentui/react-icons";

const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);
const PremiumIcon = bundleIcon(PremiumFilled, PremiumRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

const AboutSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>About</MenuItem>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Legal</MenuItem>
          <MenuItem>Privacy and cookies</MenuItem>
          <MenuItem>Third party notice</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
 
const TeamsMenu = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance="transparent" icon={<MoreIcon />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
          <MenuDivider />
          <MenuItem>Keyboard Shortcuts</MenuItem>
          <AboutSubMenu />
          <MenuDivider />
          <MenuItem icon={<PremiumIcon />}>Premium Benefits</MenuItem>
          <MenuItem>Download the desktop app</MenuItem>
          <MenuItem>Download the mobile app</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default TeamsMenu;  