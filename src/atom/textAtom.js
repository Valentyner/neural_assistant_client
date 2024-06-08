import { atom } from 'recoil';

const textAtom = atom({
    key: 'textAtom',
    default: {
      sentMessages: [],
      receivedMessages: [],
    },
  });
  
export default textAtom;


const messagesAtom = atom({
  key: 'messagesAtom',
  default: []
});

export { messagesAtom };
