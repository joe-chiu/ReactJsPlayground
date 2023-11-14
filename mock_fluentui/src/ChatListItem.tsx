import React from "react";

import {
	Avatar, 
	PresenceBadgeStatus,
} from "@fluentui/react-components";

interface ChatListItemProps {
	displayName?: string,
	status?: PresenceBadgeStatus,
	imageUrl?: string,
	lastMessagePreview?: string,
	lastMessageTime?: string
	unread? : boolean
}

const ChatListItem = ({
	displayName = "Katri Athokas",
	status = "available",
	imageUrl = "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
	lastMessagePreview = "Sure, I'll set up something for the next week to something something",
	lastMessageTime = "11:40 AM",
	unread = false
	}: ChatListItemProps) => {
	return (
		<div className="flex flex-row">
			<Avatar
				name={displayName}
				badge={{status: status}}
				image={{
					src: imageUrl,
				}} 
			/>
			<div className={`flex flex-col pl-2 ${unread && "font-bold"}`} >
				<div className="flex flex-row items-baseline">
					<p className="flex-grow">{displayName}</p>
					<p className="text-xs text-gray-500">{lastMessageTime}</p>
				</div>
				<p className="line-clamp-1 text-xs text-gray-500">{lastMessagePreview}</p>
			</div>
		</div>
	);
};

export default ChatListItem;