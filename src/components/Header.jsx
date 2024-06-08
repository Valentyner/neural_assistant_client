import { Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { IoChatbox } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { CiMicrophoneOn } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom"

const Header = ({ icon }) => {

    return (
        <Flex mt={"10px"} w={"full"}>
            <Button>
                {icon ? (
                    <Link as={RouterLink} to={"/chat"}>
                        <IoChatbox />
                    </Link>
                ) : (
                    <Link as={RouterLink} to={"/"}>
                        <CiMicrophoneOn />
                    </Link>
                )}
            </Button>
        </Flex>
    )
}

export default Header
