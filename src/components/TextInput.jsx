import { InputGroup, InputRightElement, Textarea } from '@chakra-ui/react';
import React from 'react';
import { IoSendSharp } from "react-icons/io5";
import { useRecoilState } from 'recoil';
import textAtom, { messagesAtom } from '../atom/textAtom';

const TextInput = () => {
  const [text, setText] = useRecoilState(textAtom);
  const [messages, setMessages] = useRecoilState(messagesAtom);

  const handleSendMessage = async () => {
    if (text.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text, ownMessage: true }]);
      try {
        const response = await fetch('http://127.0.0.1:8080/process-text', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),  // Send text as a JSON object
        });
        const data = await response.json();
        console.log(data);
        if (data.error) {
          console.error(data.error);
          return;
        }
      } catch (error) {
        console.error(error);
        return;
      }
      setText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <InputGroup>
      <Textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={handleKeyPress}
        w={"full"}
        placeholder='Введіть текст тут...'
      />
      <InputRightElement cursor={"pointer"}>
        <IoSendSharp onClick={handleSendMessage} />
      </InputRightElement>
    </InputGroup>
  );
};

export default TextInput;
