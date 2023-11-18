import {
	Avatar, 
  PresenceBadgeStatus,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Button,
  Divider,
} from "@fluentui/react-components";

import {
  bundleIcon,
  ChatRegular,
  ChatFilled,
  VideoRegular,
  VideoFilled,
  CallRegular,
  CallFilled,
  MoreHorizontalFilled,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";

const ChatIcon = bundleIcon(ChatFilled, ChatRegular);
const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const CallIcon = bundleIcon(CallFilled, CallRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);


export interface TeamsAvatarProps {
	displayName?: string,
	status?: PresenceBadgeStatus,
	imageUrl?: string,
}

export const TeamsAvatar = ({
  displayName = "Katri Athokas",
  status = "available",
  imageUrl = "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
  }: TeamsAvatarProps) => {

  return (
    <Popover openOnHover={true} positioning={"below-start"}>
      <PopoverTrigger disableButtonEnhancement>
        <Avatar 
          image={{ src: imageUrl }} 
          badge={{ status: status }}
        />
      </PopoverTrigger>
      <PopoverSurface>
        <div className="w-60 h-72 flex flex-col p-2">
          <div className="flex flex-row">
            <Avatar 
              size={72}
              className=""
              image={{ src: imageUrl }} 
              badge={{ status: status }}
            />
            <div className="flex flex-col pl-4 justify-center">
              <div className="font-bold">{displayName}</div>
              <div className="text-slate-700">{status}</div>
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
          <div className="flex-grow">
            <div className="font-bold">Contacts</div>
            <div>Paragraph of contact data</div>
          </div>
        </div>
      </PopoverSurface>
    </Popover>
  )
};
