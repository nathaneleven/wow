import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const EmailForm = () => {
  return (
    <>
            <Flex align="center">
                <Input w="80%" focusBorderColor="white" colorScheme="white" bgColor="#fff" borderRadius="full" placeholder="Enter Zip Code" size="lg" variant="filled" mr="3" />
                <Button colorScheme="yellow" color="#000" bgColor="#ffc40c" px="40px" size="lg" variant="solid" borderRadius="full">Check Availability</Button>
            </Flex>
    </>
  )}

  export default EmailForm