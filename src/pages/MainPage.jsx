import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import { FaAssistiveListeningSystems, FaMicrophone } from "react-icons/fa";


const MainPage = () => {
    let audioInstance = null;

    const [mediaRecorder, setMediaRecorder] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const startRecording = async () => {

        if (audioInstance && !audioInstance.ended) {
            console.log("Cannot start recording");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);

            const chunks = [];
            recorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            recorder.onstop = async () => {
                const audioBlob = new Blob(chunks, { type: 'audio/webm' });
                const formData = new FormData();
                formData.append('audio', audioBlob);
                console.log(chunks);
                setIsPlaying(true);
                try {
                    const response = await fetch('http://127.0.0.1:8080/process-audio', {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        console.log("Audio uploaded successfully");
                        const returnedBlob = await response.blob();
                        const returnedURL = URL.createObjectURL(returnedBlob);

                        const playAudioPromise = new Promise((resolve, reject) => {
                            audioInstance = new Audio(returnedURL);
                            audioInstance.onended = resolve;
                            audioInstance.onerror = reject;
                            audioInstance.play();
                        });

                        // Чекаємо на завершення програвання аудіо
                        await playAudioPromise;
                        setIsPlaying(false);
                        console.log("Audio playback finished");
                    } else {
                        console.error("Server error: ", response.statusText);
                    }
                } catch (error) {
                    console.error("Upload failed: ", error);
                }
            };

            recorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    return (
        <Flex
            justifyContent="space-between"
            flexDirection="column"
            alignItems="center"
            h={"100vh"}
        >
            <Flex>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"} gap={4}>
                {!isRecording ? (
                    <Button isDisabled={isPlaying ? true : false} onClick={startRecording} h={{ base: "150px", md: "250px" }} w={{ base: "150px", md: "250px" }} borderRadius={"50%"}>
                        <FaMicrophone size={90} />
                    </Button>
                ) : (
                    <Button onClick={stopRecording} h={{ base: "150px", md: "250px" }} w={{ base: "150px", md: "250px" }} borderRadius={"50%"}>
                        <FaAssistiveListeningSystems size={90} />
                    </Button>
                )}
                <Text fontSize={{ base: 15, md: 20 }} color={"gray.light"}>{!isRecording && !isPlaying ? "Press button to start recording" : isRecording && !isPlaying ? "Recording" : "Replaying audio"}</Text>
            </Flex>
            <Flex justify={'flex-end'} w={"full"}>
                <TextInput></TextInput>
            </Flex>
        </Flex>
    );
};

export default MainPage;

