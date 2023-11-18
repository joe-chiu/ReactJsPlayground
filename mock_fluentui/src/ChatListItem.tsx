import {
	Avatar, 
	PresenceBadgeStatus,
	TreeItem,
	TreeItemPersonaLayout,
	makeStyles,
} from "@fluentui/react-components";

import { TeamsAvatar } from "./TeamsAvatar";

export interface ChatListItemProps {
	displayName?: string,
	status?: PresenceBadgeStatus,
	imageUrl?: string,
	lastMessagePreview?: string,
	lastMessageTime?: string
	unread? : boolean
}

const useCustomStyles = makeStyles({
	root: {
		paddingLeft: "5px",
		paddingRight: "5px",
	},
	main: {
		paddingTop: "2px",
	},
	description: {
		paddingBottom: "2px",
	}
});

export const ChatListItem = ({
	displayName = "Katri Athokas",
	status = "available",
	imageUrl = "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
	lastMessagePreview = "Sure, I'll set up something for the next week to something something",
	lastMessageTime = "11:40 AM",
	unread = false
	}: ChatListItemProps) => {

	const customStyle = useCustomStyles();		
	return (
		<TreeItem itemType="leaf">
			<TreeItemPersonaLayout
				className={customStyle.root}
				main={{
					className: customStyle.main,
					children:
						<div className={`flex flex-row items-baseline ${unread && "font-bold"}`}>
							<p className="flex-grow">{displayName}</p>
							<p className="text-xs text-slate-700">{lastMessageTime}</p>
						</div>					
				}}
				media={
					<TeamsAvatar 
						imageUrl={imageUrl} 
						status={status}
					/>}
				description={{
					className: customStyle.description,
					children:
						<p className={`line-clamp-1 text-xs text-slate-700 ${unread && "font-bold"}`}>{lastMessagePreview}</p>
				}}
			/>
		</TreeItem>
	);
};
