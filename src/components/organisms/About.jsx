import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#000" mb="24px">
                    About WOW!
                    </Heading>
                        <Text>
                        As one of the biggest broadband providers in the country, WOW! is an internet service provider that operates in the southern and central portions of the US. According to FCC data, the service is available to just over 7 million customers across the US.
                        <br/><br/>
                        WOW! offers customers a with high-speed Internet at speeds up to 1 Gig, TV and voice – the ISP brings a personalized, community-oriented approach to all 19 markets we serve. This makes the company a long-standing winner for best customer service in the industry and offers you a distinctly different choice in Internet, TV and phone providers.
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-wow-image.jpg" alt="About Image Wow" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About