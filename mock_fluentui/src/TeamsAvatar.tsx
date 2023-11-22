import {
	Avatar, 
  PresenceBadgeStatus,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Button,
  Divider,
  Link,
  Slot,
  PresenceBadge,
} from "@fluentui/react-components";

import {
  bundleIcon,
  ChatRegular,
  ChatFilled,
  VideoRegular,
  VideoFilled,
  CallRegular,
  CallFilled,
  MailRegular,
  MailFilled,
  MoreHorizontalFilled,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";

const ChatIcon = bundleIcon(ChatFilled, ChatRegular);
const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const CallIcon = bundleIcon(CallFilled, CallRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const MailIcon = bundleIcon(MailFilled, MailRegular);

export interface TeamsAvatarProps {
	displayName?: string,
	status?: PresenceBadgeStatus,
	imageUrl?: string,
  badge?: Slot<typeof PresenceBadge>,
}

export const TeamsAvatar = (props: TeamsAvatarProps) => {

  return (
    <Popover openOnHover={true} positioning={"below-start"}>
      <PopoverTrigger disableButtonEnhancement>
        <Avatar
          size={36}
          image={{ src: props.imageUrl }} 
          badge={props.badge ? props.badge : { status: props.status }}
        />
      </PopoverTrigger>
      <PopoverSurface>
        <div className="w-50 h-60 flex flex-col">
          <div className="flex flex-row">
            <Avatar 
              size={72}
              className=""
              image={{ src: props.imageUrl }} 
              badge={{ status: props.status }}
            />
            <div className="flex flex-col pl-2 justify-center">
              <div className="font-bold">{props.displayName}</div>
              <div className="text-slate-700">{props.status}</div>
            </div>
          </div>
          <div className="flex flex-row pt-2">
            <Button appearance="transparent" size="medium" className="h-8 w-20" icon={<ChatIcon />} />
            <Button appearance="transparent" size="medium" className="h-8 w-20" icon={<VideoIcon />} />
            <Button appearance="transparent" size="medium" className="h-8 w-20" icon={<CallIcon />} />
            <Button appearance="transparent" size="medium" className="h-8 w-20" icon={<MoreIcon />} />
          </div>
          <div className="h-5 pt-2 pb-2">
            <Divider />
          </div>
          <div className="grow">
            <div className="font-bold">Contacts</div>
            <MailIcon fontSize={20} className="mr-2" /><Link>somewhere@gmail.com</Link>
          </div>
        </div>
      </PopoverSurface>
    </Popover>
  )
};
