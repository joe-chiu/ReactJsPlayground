import { ChatMessage, MessageStatus } from "@azure/communication-react";

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
  