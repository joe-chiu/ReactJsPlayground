import React from "react";

import {
	Avatar, 
	PresenceBadgeStatus,
	TreeItem,
	TreeItemPersonaLayout,
	makeStyles,
} from "@fluentui/react-components";

interface ChatListItemProps {
	displayName?: string,
	status?: PresenceBadgeStatus,
	imageUrl?: string,
	lastMessagePreview?: string,
	lastMessageTime?: string
	unread? : boolean
}

const useItemStyles = makeStyles({
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

const ChatListItem = ({
	displayName = "Katri Athokas",
	status = "available",
	imageUrl = "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
	lastMessagePreview = "Sure, I'll set up something for the next week to something something",
	lastMessageTime = "11:40 AM",
	unread = false
	}: ChatListItemProps) => {

	const itemStyle = useItemStyles();		
	return (
		<TreeItem itemType="leaf">
			<TreeItemPersonaLayout
				className={itemStyle.root}
				main={{
					className: itemStyle.main,
					children:
						<div className={`flex flex-row items-baseline ${unread && "font-bold"}`}>
							<p className="flex-grow">{displayName}</p>
							<p className="text-xs text-gray-500">{lastMessageTime}</p>
						</div>					
				}}
				media={
					<Avatar 
						image={{ src: imageUrl }} 
						badge={{ status: status }}
					/>}
				description={{
					className: itemStyle.description,
					children:
						<p className={`line-clamp-1 text-xs text-gray-500 ${unread && "font-bold"}`}>{lastMessagePreview}</p>
				}}
			/>
		</TreeItem>
	);
};

export default ChatListItem;