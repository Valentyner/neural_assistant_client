import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const MainPage = () => {
    const [mediaRecorder, setMediaRecorder] = useState();
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
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
                try {
                    const response = await fetch('http://127.0.0.1:8080/process-audio', {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        console.log("Audio uploaded successfully");
                        const returnedBlob = await response.blob();
                        const returnedURL = URL.createObjectURL(returnedBlob);
                        await new Audio(returnedURL).play();
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
            justifyContent="center"
            mt="30%"
            flexDirection="column"
            alignItems="center"
        >
            {!isRecording ? (
                <Button onClick={startRecording} h={{ base: "150px", md: "250px" }} w={{ base: "150px", md: "250px" }} borderRadius={"50%"}>
                    <Image w={{ base: 10, md: 14 }} src="/mic-microphone-icon.svg" />
                </Button>
            ) : (
                <Button onClick={stopRecording} h={{ base: "150px", md: "250px" }} w={{ base: "150px", md: "250px" }} borderRadius={"50%"}>
                    {/* Add a stop icon or text here if needed */}
                </Button>
            )}
            <Text fontSize={{ base: 15, md: 20 }} my={10} color={"gray.light"}>Press button to start recording...</Text>
        </Flex>
    );
};

export default MainPage;

