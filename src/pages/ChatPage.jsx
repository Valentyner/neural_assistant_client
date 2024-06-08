import React from 'react';
import Header from '../components/Header';
import { Flex } from '@chakra-ui/react';
import TextInput from '../components/TextInput';
import MessageContainer from '../components/MessageContainer';

const ChatPage = () => {
  return (
    <>
      <Header icon={false} />
      <MessageContainer />
      <TextInput />
    </>
  );
};

export default ChatPage;
