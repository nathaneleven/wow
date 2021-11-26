import React from 'react'
import { Flex, Box, Heading, List, ListIcon, ListItem, AspectRatio, Stack } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'

const Hero = () => {
    return (
        <>
        <Stack w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading color="#000" as="h1" mb="24px">
            WOW! – your community-oriented Internet service provider
            </Heading>
            <List color="#000000"spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    No contracts, no fear about cancellation fees or being tied to an unwanted plan 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    30-day money-back guarantee 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No data caps, no need to worry about overage fees
                </ListItem>
            </List>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -90px","0 -70px","0 -100px","0 -120px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/hero-wow-image.jpg" alt="Hero Image Wow" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default Hero
