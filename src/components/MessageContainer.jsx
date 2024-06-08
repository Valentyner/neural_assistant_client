import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { messagesAtom } from '../atom/textAtom';
import Message from './Message';

const MessageContainer = () => {
  const messages = useRecoilValue(messagesAtom);

  return (
    <Flex mb={4} mt={4} flex={"70"} bg={"gray.dark"} p={2} borderRadius={"md"} flexDirection={"column"}>
      <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
      </Flex>
      <Divider />
      <Flex flexDir={"column"} gap={4} my={4} px={2} maxH={"600px"} height={"700px"} overflowY={"auto"}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} ownMessage={message.ownMessage} />
        ))}
      </Flex>
    </Flex>
  );
};

export default MessageContainer;
