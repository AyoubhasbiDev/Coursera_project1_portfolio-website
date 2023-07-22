import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <Box textAlign={'center'}>
        <Avatar name="Peter" src="https://i.pravatar.cc/150?img=7" size={'2xl'} mb='10px' />
        <Heading as={'h3'} fontSize='15px'>{greeting}</Heading>
      </Box>
      <Box textAlign={'center'}>
        <Heading as={'h1'}> {bio1}</Heading>
        <Heading as={'h1'}> {bio2}</Heading>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
