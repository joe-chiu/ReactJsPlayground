import { useState } from "react";

import { 
  Body1, 
  Button, 
  Caption1, 
  Card, 
  CardFooter, 
  CardHeader, 
  CardPreview, 
  makeStyles, 
  shorthands 
} from "@fluentui/react-components";

import { 
  ArrowReplyRegular, 
  ShareRegular 
} from "@fluentui/react-icons";

const customStyle = {
  chatContainer: {
    backgroundColor: "rgb(238 242 255)",
    maxWidth: "none",
  }
};

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "1536px",
    minHeight: 0,
    marginBottom: "16px",
  },
});

const Post = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset("avatar_elvia.svg")}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};

export const TeamMessagePane = () => {

  return (
    <div id="messagePane" className="grow flex flex-col">
      { /* the h-52 somehow works like min-height and is crucial to make the layout work */ }
      <div id="teamPostsArea" className="grow h-52 overflow-y-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
