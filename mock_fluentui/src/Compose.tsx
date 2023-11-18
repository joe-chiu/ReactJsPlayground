import { useEffect, useRef, useState } from "react";

import {
  Button,
  Input,
  Textarea,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
} from "@fluentui/react-components";

import {
  bundleIcon,
  SendRegular,
  SendFilled,
  AddRegular,
  AddFilled,
  EmojiRegular,
  EmojiFilled,
  TextEditStyleRegular,
  TextEditStyleFilled,
  ImageRegular,
  ImageFilled,
  AttachRegular,
  AttachFilled,
  GifRegular,
  GifFilled,
  CheckboxCheckedRegular,
  CheckboxCheckedFilled,
  PollRegular,
  PollFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
} from "@fluentui/react-icons";   

const SendIcon = bundleIcon(SendFilled, SendRegular);
const AddIcon = bundleIcon(AddFilled, AddRegular);
const EmojiIcon = bundleIcon(EmojiFilled, EmojiRegular);

const EditStyleIcon = bundleIcon(TextEditStyleFilled, TextEditStyleRegular);
const ImageIcon = bundleIcon(ImageFilled, ImageRegular);
const AttachIcon = bundleIcon(AttachFilled, AttachRegular);
const GifIcon = bundleIcon(GifFilled, GifRegular);
const CheckboxIcon = bundleIcon(CheckboxCheckedFilled, CheckboxCheckedRegular);
const PollIcon = bundleIcon(PollFilled, PollRegular);
const MoreIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

export const Compose = () => {
  const [showRichCompose, setShowRichCompose] = useState(false);  

  return (
    <div id="composeArea" className={`flex-none ${showRichCompose ? "h-40" : "h-20" } pt-2 pb-2 flex flex-col pr-4 pl-4 justify-end`} >
      <div className="flex flex-row gap-2">
        <div className="flex-grow">
          {!showRichCompose &&
          <Input className="w-full" placeholder="Type a new message" contentAfter={
            <div>
              <Button size="small" appearance="transparent" icon={<EmojiIcon />} />
              <Button size="small" appearance="transparent" icon={<AddIcon />} />
            </div>
          } />
          }
          {showRichCompose &&
          <div>
            <Toolbar style={{padding: 0}} >
              <ToolbarButton
                icon={<EmojiIcon />}
              />
              <ToolbarButton
                icon={<EmojiIcon />}
              />
              <ToolbarDivider />
            </Toolbar>
            <Textarea className="w-full h-24" placeholder="Type a new message" />
          </div>
          }
        </div>
        <div className="">
          <Button icon={<SendIcon />} />
        </div>
      </div>
      <div className="flex flex-row">
        <Button appearance="transparent" icon={<EditStyleIcon />} 
        />
        <Button appearance="transparent" icon={<ImageIcon />} />
        <Button appearance="transparent" icon={<AttachIcon />} />
        <Button appearance="transparent" icon={<EmojiIcon />} />
        <Button appearance="transparent" icon={<GifIcon />} />
        <Button appearance="transparent" icon={<CheckboxIcon />} />
        <Button appearance="transparent" icon={<PollIcon />} />
        <Button appearance="transparent" icon={<MoreIcon />} />
      </div>
    </div>
  );
};
  