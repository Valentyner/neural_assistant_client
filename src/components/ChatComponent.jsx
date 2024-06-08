import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ChatComponent = () => {
  return (
    <>
      <Flex flexDirection={"column"} rounded={20} w={"full"} bg={"gray.900"} >
        <Flex mt={3} ml={3} gap={3} alignItems={"center"}>
          <Avatar size={"sm"} />
          <Text fontSize={"sm"}>username</Text>
        </Flex>
        <Flex mt={4} ml={5}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus cupiditate, fugiat eligendi officiis totam repudiandae dolore voluptate tempora eius, enim odit quidem distinctio unde eum placeat magni dolor nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis velit cum iste fugiat deleniti tempore vero eius ex nisi, laboriosam aperiam facere sed exercitationem numquam. Incidunt architecto sapiente ex.</Text>
        </Flex>
        <Flex mt={3} mr={3} gap={3} alignItems={"center"} justify={"flex-end"}>
          <Text fontSize={"sm"}>Voicer</Text>
          <Avatar size={"sm"} />
        </Flex>
        <Flex mt={4} mr={5}>
          <Text textAlign={"end"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus cupiditate, fugiat eligendi officiis totam repudiandae dolore voluptate tempora eius, enim odit quidem distinctio unde eum placeat magni dolor nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis velit cum iste fugiat deleniti tempore vero eius ex nisi, laboriosam aperiam facere sed exercitationem numquam. Incidunt architecto sapiente ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus cupiditate, fugiat eligendi officiis totam repudiandae dolore voluptate tempora eius, enim odit quidem distinctio unde eum placeat magni dolor nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis velit cum iste fugiat deleniti tempore vero eius ex nisi, laboriosam aperiam facere sed exercitationem numquam. Incidunt architecto sapiente ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus cupiditate, fugiat eligendi officiis totam repudiandae dolore voluptate tempora eius, enim odit quidem distinctio unde eum placeat magni dolor nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis velit cum iste fugiat deleniti tempore vero eius ex nisi, laboriosam aperiam facere sed exercitationem numquam. Incidunt architecto sapiente ex.</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default ChatComponent
