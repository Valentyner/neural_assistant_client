import { Input, InputGroup, InputRightElement, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoSendSharp } from "react-icons/io5"

const TextInput = () => {
  return (
    <InputGroup>
      <Textarea w={"full"} placeholder='Введіть текст тут...'/>
      <InputRightElement cursor={"pointer"}>
        <IoSendSharp />
      </InputRightElement>
    </InputGroup>
  )
}

export default TextInput
