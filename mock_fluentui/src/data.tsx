import { 
  Avatar, 
  PresenceBadgeStatus, 
  TableCellLayout, 
  TableColumnDefinition, 
  createTableColumn 
} from "@fluentui/react-components";

import { 
  ChatMessage, 
  MessageStatus 
} from "@azure/communication-react";

import { 
  DocumentPdfRegular, 
  DocumentRegular, 
  EditRegular, 
  FolderRegular, 
  OpenRegular, 
  PeopleRegular, 
  VideoRegular 
} from "@fluentui/react-icons";

export const GetHistoryChatMessages = (): ChatMessage[] => {
  return [
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Hi everyone, I created this awesome group chat for us!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:10'),
      mine: true,
      attached: false,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user2',
      senderDisplayName: 'Robert Tolbert',
      messageId: Math.random().toString(),
      content: 'Nice! This looks great!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: false,
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "Yeah agree, let's chat here from now on!",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: "top",
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "bubble merged",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: true,
      contentType: 'text'
    },
    {
      messageType: 'chat',
      senderId: 'user3',
      senderDisplayName: 'Carole Poland',
      messageId: Math.random().toString(),
      content: "last message in a chain",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: "bottom",
      contentType: 'text'
    },
  ];
};
  
export const GetHistoryChatMessagesScroll = (): ChatMessage[] => {
  return [
    ...GetHistoryChatMessages(),
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: "top",
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'Another message',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: true,
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user1',
      senderDisplayName: 'Kat Larsson',
      messageId: Math.random().toString(),
      content: 'bubble merged message from self',
      createdOn: new Date('2019-04-13T00:00:00.000+08:08'),
      mine: true,
      attached: "bottom",
      status: 'seen' as MessageStatus,
      contentType: 'html'
    },
    {
      messageType: 'chat',
      senderId: 'user2',
      senderDisplayName: 'Robert Tolbert',
      messageId: Math.random().toString(),
      content: 'Nice! This looks great!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:07'),
      mine: false,
      attached: false,
      contentType: 'text'
    },
  ];
};

export type FileCell = {
  label: string;
  icon: JSX.Element;
};

export type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

export type LastUpdateCell = {
  label: string;
  icon: JSX.Element;
};

export type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

export type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

export const GetChatFilesTableColumns = (): TableColumnDefinition<Item>[] => {
  return [
    createTableColumn<Item>({
      columnId: "file",
      compare: (a, b) => {
        return a.file.label.localeCompare(b.file.label);
      },
      renderHeaderCell: () => {
        return "File";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout media={item.file.icon}>
            {item.file.label}
          </TableCellLayout>
        );
      },
    }),
    createTableColumn<Item>({
      columnId: "author",
      compare: (a, b) => {
        return a.author.label.localeCompare(b.author.label);
      },
      renderHeaderCell: () => {
        return "Author";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout
            media={
              <Avatar
                aria-label={item.author.label}
                name={item.author.label}
                badge={{ status: item.author.status }}
              />
            }
          >
            {item.author.label}
          </TableCellLayout>
        );
      },
    }),
    createTableColumn<Item>({
      columnId: "lastUpdated",
      compare: (a, b) => {
        return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
      },
      renderHeaderCell: () => {
        return "Last updated";
      },
  
      renderCell: (item) => {
        return item.lastUpdated.label;
      },
    }),
    createTableColumn<Item>({
      columnId: "lastUpdate",
      compare: (a, b) => {
        return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
      },
      renderHeaderCell: () => {
        return "Last update";
      },
      renderCell: (item) => {
        return (
          <TableCellLayout media={item.lastUpdate.icon}>
            {item.lastUpdate.label}
          </TableCellLayout>
        );
      },
    }),
  ];  
};

export type TeamsUser = {
  id: number;
  displayName: string;
  email: string;  
}

export const GetUsers = (): TeamsUser[] => {
  return [
    {
      id: 1,
      displayName: "Alex Mercer",
      email: "byteBard@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
    {
      id: 1,
      displayName: "",
      email: "@email.com"
    },
  ]
};

export const GetChatFilesTableItems = (): Item[] => {
  return [
    {
      file: { label: "Meeting notes", icon: <DocumentRegular /> },
      author: { label: "Max Mustermann", status: "available" },
      lastUpdated: { label: "7h ago", timestamp: 1 },
      lastUpdate: {
        label: "You edited this",
        icon: <EditRegular />,
      },
    },
    {
      file: { label: "Thursday presentation", icon: <FolderRegular /> },
      author: { label: "Erika Mustermann", status: "busy" },
      lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
      lastUpdate: {
        label: "You recently opened this",
        icon: <OpenRegular />,
      },
    },
    {
      file: { label: "Training recording", icon: <VideoRegular /> },
      author: { label: "John Doe", status: "away" },
      lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
      lastUpdate: {
        label: "You recently opened this",
        icon: <OpenRegular />,
      },
    },
    {
      file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
      author: { label: "Jane Doe", status: "offline" },
      lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
      lastUpdate: {
        label: "You shared this in a Teams chat",
        icon: <PeopleRegular />,
      },
    },    
  ];
};