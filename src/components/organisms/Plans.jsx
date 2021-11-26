import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" py={{base:"10", md:"70"}}>
    <Heading mb="10">WOW! Internet plans and services</Heading>
<Flex maxW="1250px" flexDirection={"column"} >
    <Table borderBottomRadius="20px" size="lg" fontSize="21px" variant="striped" boxShadow="xl" colorScheme="gray">
  <Thead>
    <Tr  bgColor="#09b0dc">
      <Th borderTopStartRadius="20px" color="#fff" fontSize="24px">Plan</Th>
      <Th color="#fff" fontSize="24px">Max speeds</Th>
      <Th color="#fff" fontSize="24px">Promo rate (first year)</Th>
      <Th color="#fff" fontSize="24px">Regular rate (after first year)</Th>
      <Th color="#fff" fontSize="24px">Equipment fees</Th>
      <Th borderTopEndRadius="20px" color="#fff" fontSize="24px">Data cap</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Internet 100</Td>
      <Td>100Mbps download, 10Mbps upload</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >20</Box>mo</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >40</Box>mo</Td>
      <Td>$14 for modem rental (optional)</Td>
      <Td>None</Td>
    </Tr>
    <Tr>
      <Td>Internet 200</Td>
      <Td>200Mbps download, 10Mbps upload</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >30</Box>mo</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >45</Box>mo</Td>
      <Td>$14 for modem rental (optional)</Td>
      <Td>None</Td>
    </Tr>
    <Tr>
      <Td>Internet 500</Td>
      <Td>500Mbps download, 50Mbps upload</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >45</Box>mo</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >55</Box>mo</Td>
      <Td>$14 for modem rental (optional)</Td>
      <Td>None</Td>
    </Tr>
    <Tr>
      <Td>Internet 1 Gig</Td>
      <Td>1,000Mbps download, 50Mbps upload</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >55</Box>mo</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >75</Box>mo</Td>
      <Td>$14 for modem rental (optional)</Td>
      <Td>None</Td>
    </Tr>
  </Tbody>
</Table>
</Flex>
      
</Box>
</>
    )}


export default Plans