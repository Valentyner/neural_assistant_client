import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import ChatComponent from "./components/ChatComponent";

function App() {
  return (
    <Box position={"relative"} w={"full"}>
      <Container maxW={"1024px"}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
