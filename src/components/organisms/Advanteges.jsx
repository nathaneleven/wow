import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Advanteges = () => {
    return (
<>
<Box align="center" bgColor="#fff" py={{base:"10", md:"70"}}>
    <Heading mb="10">What you get with WOW!</Heading>

  <SimpleGrid columns={{base:"1", md:"4"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/speed.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 500/500</Heading>
        <Text>Get a fast and reliable connection with whole home Wi-Fi on our 100% fiber network. </Text>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/reliability.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 500/500</Heading>
        <Text>Get a fast and reliable connection with whole home Wi-Fi on our 100% fiber network. </Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/value.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 500/500</Heading>
        <Text>Get a fast and reliable connection with whole home Wi-Fi on our 100% fiber network. </Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/support.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 500/500</Heading>
        <Text>Get a fast and reliable connection with whole home Wi-Fi on our 100% fiber network. </Text>
      </Box>
    </Flex>
  </SimpleGrid>
</Box>
</>
    )}

export default Advanteges