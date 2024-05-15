import React, { useEffect, useState } from 'react';
import s from './ChatPage.module.css';
import { Button } from '../../components/common/Button/Button';

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage: React.FC = () => {
  return (
    <div className={s.chat_page}>
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      setTimeout(createChannel, 3000);
    };

    function createChannel() {
      ws?.removeEventListener('close', closeHandler);
      ws?.close();
      ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
      );
      ws?.addEventListener('close', closeHandler);
      setWs(ws);
    }

    createChannel();

    return () => {
      ws.removeEventListener('close', closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div>
      <MessagesChat ws={ws} />
      <AddMessageChatForm ws={ws} />
    </div>
  );
};

const MessagesChat: React.FC<{ ws: WebSocket | null }> = ({ ws }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessage]);
    };
    ws?.addEventListener('message', messageHandler);
    return () => {
      ws?.removeEventListener('message', messageHandler);
    };
  }, [ws]);

  //const messages = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      {messages.map((m: any, key: number) => (
        <div key={key}>
          <Message message={m} />
        </div>
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  //const message: ChatMessageType = null;
  return (
    <div>
      <img src={message.photo} alt="" />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};

const AddMessageChatForm: React.FC<{ ws: WebSocket | null }> = ({ ws }) => {
  const [message, setMessage] = useState('');
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>(
    'pending'
  );

  useEffect(() => {
    let onOpenHandler = () => {
      setReadyStatus('ready');
    };
    ws?.addEventListener('open', onOpenHandler);
    return () => {
      ws?.removeEventListener('open', onOpenHandler);
    };
  }, [ws]);
  const sendMessage = () => {
    if (!message) {
      return;
    }
    ws?.send(message);
    setMessage('');
  };
  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        />
      </div>
      <div>
        <Button disabled={!ws || readyStatus !== 'ready'} onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatPage;
