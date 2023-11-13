import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
} from "@fluentui/react-components";

import {
  bundleIcon,
  ComposeRegular,
  ComposeFilled,
  VideoRegular,
  VideoFilled,
  FilterRegular,
  FilterFilled,
} from "@fluentui/react-icons";

const ComposeIcon = bundleIcon(ComposeFilled, ComposeRegular);
const VideoIcon = bundleIcon(VideoFilled, VideoRegular);
const FilterIcon = bundleIcon(FilterFilled, FilterRegular);


import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <div className="flex flex-col w-72 h-full bg-blue-100 shadow-lg">
      <div className="h-14 flex flex-row items-center gap-2 p-3">
        <p className="flex-grow w-52 text-lg font-bold">Chat</p>
        <Button size="medium" className="h-8" icon={<FilterIcon />} />
        <Button size="medium" className="h-8" icon={<VideoIcon />} />
        <Button size="medium" className="h-8" icon={<ComposeIcon />} />
      </div>
      <div className="flex-grow">
        <Accordion multiple openItems={["1", "2"]} >
          <AccordionItem value="1">
            <AccordionHeader size="small">Pinned</AccordionHeader>
            <AccordionPanel>
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader size="small">Recent</AccordionHeader>
            <AccordionPanel>
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ChatList;