import React from "react";

import {
	Avatar,
} from "@fluentui/react-components";

const ChatListItem = () => {
	return (
		<div className="flex flex-row">
			<Avatar
				name="Katri Athokas"
				badge={{status: "available"}}
				image={{
					src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
				}} 
			/>
			<div className="flex flex-col">
				<div className="flex flex-row">
					<p className="flex-grow">Katri Athokas</p>
					<p>11:40 AM</p>
				</div>
				<p className="line-clamp-1 text-xs text-gray-500">Sure, I'll set up something for the next week to something something</p>
			</div>
		</div>
	);
};

export default ChatListItem;