import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'
import { Image } from '@chakra-ui/image'

const  Header = () => {
return (
<>
    <Image w="100%" src="/color-bar.svg" alt="Color Bar Wow" />
    <Box p="17px" border="1" bgColor="#fff" boxShadow="lg" align="center">
        <Flex maxW="1272px" justify="center">
        <LogoHeader />
        <Spacer />
        <TelephoneHeader />
        </Flex>
    </Box>
</>
)
}

export default Header
