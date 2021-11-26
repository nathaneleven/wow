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

        <Heading pb="10px" as="h3" fontSize="2xl">SPEED</Heading>
        <Text>Share files quickly, communicate seamlessly, and advance your business with the fastest Internet speeds on the market.</Text>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/reliability.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">RELIABILITY</Heading>
        <Text>You'll get peace of mind with the security of a privately owned and managed network.</Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/value.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">VALUE</Heading>
        <Text>WOW! packages are priced to fit your budget and drive your business.</Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/support.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">SUPPORT</Heading>
        <Text>Our dedicated, locally-based account and IT teams provide 24/7 support.</Text>
      </Box>
    </Flex>
  </SimpleGrid>
</Box>
</>
    )}

export default Advanteges