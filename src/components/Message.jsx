import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Message = ({ text, ownMessage }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} bg={"blue.400"} p={1} borderRadius={"md"}>{text}</Text>
          <Avatar w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar w={7} h={7} />
          <Text maxW={"350px"} bg={"gray.700"} p={1} borderRadius={"md"}>{text}</Text>
        </Flex>
      )}
    </>
  );
};

export default Message;
